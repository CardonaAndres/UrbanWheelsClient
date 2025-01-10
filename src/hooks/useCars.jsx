import { useState, useEffect } from 'react';
import { getAllCars, deleteCar, getCarByPlate, createCar, updatedCar } from '../API/car.js';
import { useDataCar } from './useDataCar.jsx';
import { errorAlert, confirmAlert, successAlert } from '../components/common/Alerts';

export const useCar = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [carData, setCarData] = useState(null);
  const [brands, setBrands] = useState([]);
  const [states, setStates] = useState([]);
  const [typeCars, setTypeCars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);  

  // Función para ir a la siguiente página
  const handleNextPage = () => { if (page < totalPages) setPage(prev => prev + 1); };

  // Función para ir a la página anterior
  const handlePrevPage = () => { if (page > 1) setPage(prev => prev - 1); };

  // Función para obtener todos los coches
  const getCars = async (currentPage) => {
    try {
      setLoading(true);
      const resCars = await getAllCars(currentPage);
      if (!resCars.status) throw new Error(resCars.message);
      
      setTotalPages(resCars.data.pagination.totalPages);
      setTotalCars(resCars.data.pagination.totalCars);
      setCars(resCars.data.cars);
    } catch (err) {
      errorAlert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar un coche
  const deleteCarFunc = async (carID) => {
    try {
      const confirmDelete = await confirmAlert("Seguro");
      if (!confirmDelete.isConfirmed) return successAlert('Cancelado con éxito');
      const res = await deleteCar(carID);
      if (!res.status) throw new Error(res.message || 'Vuelve a intentarlo');
      const confirm = await successAlert(res.message);
      if (confirm.isConfirmed) window.location.reload();
    } catch (err) {
      errorAlert(err.message);
    }
  };

  //función para buscar coche por placa
  const searchCarByPlate = async (plate) => {
    try {
      setLoading(true);
      const res = await getCarByPlate(plate);
      if (!res.status) throw new Error(res.message);
      setCarData(res.data); 
      setModalOpen(true);     
    } catch (err) {
      setCarData(null);       
      errorAlert(err.message); 
    } finally {
      setLoading(false);
    }
  };

  // Función para crear o actualizar coche
  const handleSubmitCar = async (data, isEditMode, onClose) => {
    try {
      setLoading(true);
      const res = isEditMode ? await updatedCar(data) : await createCar(data);
      if (!res.status) throw new Error(res.message);
      return {status : true};
    } catch (err) {
      return { status : false, message : err.message };
    } finally {
      setLoading(false);
    }
  };

  // Effect para cargar los coches iniciales y los selects
  useEffect(() => {
    getCars(page);

    const getSelects = async () => {
      try {
        const res = await useDataCar();
        setBrands(res.data.brands);
        setTypeCars(res.data.type_cars);
        setStates(res.data.states);
      } catch (err) {
        errorAlert(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSelects();
  }, [page]);

  return {
    cars,
    carData,
    modalOpen,
    page,
    totalPages,
    totalCars,
    loading,
    brands,
    states,
    typeCars,
    handleNextPage,
    handlePrevPage,
    deleteCarFunc,
    searchCarByPlate,
    handleSubmitCar,
    setModalOpen
  };
};
