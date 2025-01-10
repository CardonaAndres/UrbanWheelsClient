import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { useCar } from '../../hooks/useCars';
import { errorAlert, successAlert } from '../common/Alerts';

export const CarForm = ({ onClose, carData }) => {
  const { register, handleSubmit, reset } = useForm({});
  const { brands, states, typeCars, loading, handleSubmitCar } = useCar();
  const [image, setImage] = useState(carData.image_url);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const onSubmited = async (data) => {
    const isEditMode = Boolean(carData.car_ID);
    const res = await handleSubmitCar(data, isEditMode);
    if(res.status) {
      onClose();
      await successAlert(isEditMode ? 'Editado con éxito' : 'Creado con éxito');
      window.location.reload();
    } else {
      onClose();
      errorAlert(res.message);
    }
  };

  useEffect(() => {
    reset(carData);
  }, [carData, reset]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="w-full h-27 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-2xl flex items-center justify-between px-8 py-5">
        <p className="text-white text-2xl font-semibold">
          {carData.car_ID ? 'Cambia Los Datos Del Coche' : 'Registra Un Nuevo Coche'}
        </p>
        <Button variant="contained" color="error" onClick={onClose} className="p-3">
          Cerrar
        </Button>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <p className="text-2xl font-bold text-gray-800 mb-6">Formulario de Vehículo</p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmited)} encType="multipart/form-data">
          <div className="flex flex-col">
            <InputLabel htmlFor="image" className="text-gray-700">Imagen del Vehículo</InputLabel>
            <div className="relative">
              <TextField type="file" color='error' variant="outlined" className="border-gray-300 w-full" {...register('image_url')} onChange={handleImageChange} inputProps={{ accept: 'image/*', multiple: false }} />
            </div>
            {image && <div className="mt-2"><img src={image} alt="Vista previa" className="max-w-full h-auto rounded-lg shadow-md" /></div>}
          </div>

          <TextField label="Modelo" variant="outlined" color='error' className="border-gray-300 w-full" {...register('model', { required: true })} />
          <TextField label="Año" variant="outlined" color='error' className="border-gray-300 w-full" {...register('year', { required: true })} />
          <TextField label="Placa" variant="outlined" color='error' className="border-gray-300 w-full" {...register('plate', { required: true })} />
          <TextField label="Kilometraje" type="number" variant="outlined" color='error' className="border-gray-300 w-full" {...register('kilometre', { required: true })} />
          <TextField label="Color" variant="outlined" color='error' className="border-gray-300 w-full" {...register('color', { required: true })} defaultValue={carData.color} />

          <div className="flex flex-col">
            <InputLabel htmlFor="acquisition_date" className="text-gray-700">Fecha de Adquisición</InputLabel>
            <TextField type="date" variant="outlined" color='error' className="border-gray-300 w-full" {...register('acquisition_date', { required: true })} />
          </div>

          <FormControl fullWidth color='error'>
            <InputLabel className="text-gray-700">Estado</InputLabel>
            <Select label="Estado" className="border-gray-300" {...register('status_ID', { required: true })} defaultValue={carData.status_ID}>
              {states.map((state) => (
                <MenuItem key={state.state_ID} value={state.state_ID}>{state.name_state}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth color='error'>
            <InputLabel id="brand-label" className="text-gray-700">Marca</InputLabel>
            <Select labelId="brand-label" {...register('brand_ID', { required: true })} label="Marca" defaultValue={carData.brand_ID} className="border-gray-300">
              {brands.map((brand) => (
                <MenuItem key={brand.brand_ID} value={brand.brand_ID}>{brand.brand}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth color='error'>
            <InputLabel id="type_car-label" className="text-gray-700">Tipo de Vehículo</InputLabel>
            <Select labelId="type_car-label" label="Tipo de Vehículo" {...register('car_type_ID', { required: true })} defaultValue={carData.car_type_ID} className="border-gray-300">
              {typeCars.map((typeCar) => (
                <MenuItem key={typeCar.car_type_ID} value={typeCar.car_type_ID}>{typeCar.name_type}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="flex justify-end">
            <Button variant="contained" color="error" type='submit' size="large" className="w-full sm:w-auto mt-4">
              {carData.car_ID ? 'Editar' : 'Registrar Coche'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
