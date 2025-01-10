import { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatKilometers, formatMoney } from "../../assets/js/config.js";
import { CarServiceModal } from "./CarServiceModal.jsx";
import { format } from 'date-fns';
import { deleteCarService } from "../../API/carService.js";
import { confirmAlert, errorAlert, successAlert } from "../common/Alerts.jsx";
import { routes } from "../../assets/js/config.js";
import { useLocation } from "react-router-dom";

export const CarDetails = ({ car, services }) => {

  const [modalOpen, setModalOpen] = useState(false); 
  const [data, setData] = useState({});
  const location = useLocation();
  const isAdminMode = location.pathname.startsWith(routes.carServiceAdminMode);
  const validServiceTypes = ["Alquiler", "Venta"]
  const filteredServices = isAdminMode ? services : 
  services.filter(service => validServiceTypes.includes(service.service_name));

  const handleClose = () => { setModalOpen(false); setData({}) }

  const handleOpen = (service) => {
     setData({
      car_service_ID : service.car_service_ID,
      car_ID : car.car_ID,
      service_ID : service.service_ID,
      price : service.price
    });

    setModalOpen(true);
  }

  const deleteRequest = async (service) => {
    try {
      const confirmDelete = await confirmAlert('Seguro');
      if (!confirmDelete.isConfirmed) return successAlert('Cancelado con exito')
      

      const res = await deleteCarService(service.car_service_ID);
      if(!res.status) throw new Error(res.message);

      const confirm = await successAlert(res.message);
      if(confirm.isConfirmed) window.location.reload();

    } catch (err){
      errorAlert(err.message);
    }
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 p-8 bg-gray-50 min-h-screen">

      <div className="w-full md:w-2/5 bg-white shadow-2xl border border-gray-200 rounded-lg p-8 hover:shadow-red-100/50 transition-shadow">
        <div className="text-xl font-bold text-red-600 mb-6">Información del Carro</div>
        <img src={car.image_url} alt={`Imagen de ${car.model}`}       
          className="w-full h-54 object-cover rounded-lg mb-6 border border-gray-300 shadow-md" />

        <div className="grid grid-cols-2 gap-4 text-gray-700">
          { isAdminMode && <p><strong>ID:</strong> {car.car_ID}</p> }
          <p><strong>Modelo:</strong> {car.model}</p>
          <p><strong>Año:</strong> {car.year}</p>
          <p><strong>Placa:</strong> {car.plate}</p>
          <p><strong>Kilometraje:</strong> {formatKilometers(car.kilometre)}</p>
          <p><strong>Color:</strong> {car.color}</p>
          { isAdminMode && 
            <p><strong>Adquisición:</strong> {format(new Date(car.acquisition_date), 'yyyy-MM-dd')}</p> }
          <p><strong>Estado:</strong> {car.name_state}</p>
          <p><strong>Marca:</strong> {car.brand}</p>
          <p><strong>Tipo:</strong> {car.name_type}</p>
        </div>
      </div>

      <div className="w-full md:w-2/3 bg-white shadow-2xl border border-gray-200 rounded-lg p-8 hover:shadow-red-100/50 transition-shadow">
        <div className="text-xl font-bold text-red-600 mb-6">Servicios del Carro</div>
        {filteredServices.length > 0 ? (
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <div key={service.service_ID}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-300">
                <div>
                  <p className="text-lg text-gray-800 font-semibold">
                    {service.service_name}
                  </p>
                  <p className="text-gray-600">
                    <strong>Precio:</strong>{formatMoney(service.price)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {service.description}
                  </p>
                </div>

                {isAdminMode ? (

                   <div className="flex space-x-2">
                   <Button variant="contained" color="success" size="small" 
                       startIcon={<EditIcon/>} onClick={() => handleOpen(service)} >
                                                       
                     Editar
                   </Button>

                   <CarServiceModal open={modalOpen} onClose={handleClose} serviceData={data} />
 
                   <Button variant="contained" color="error"size="small" 
                   startIcon={<DeleteIcon />} onClick={() => deleteRequest(service)}>
                     Eliminar
                   </Button>
                 </div>

                ) : ( 

                  <div className="flex space-x-2">
                    <Button variant="contained" color="success"
                    size="small">                                           
                     Adquirir servicio
                   </Button>

                  </div>
                )}           
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Este carro no tiene servicios registrados o no está disponible para su visualización.
          </p>
        )}
      </div>
    </div>
  );
};
