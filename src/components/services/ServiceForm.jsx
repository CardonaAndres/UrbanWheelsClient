import { Button, TextField  } from '@mui/material';
import { errorAlert, successAlert } from '../common/Alerts'
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { createService, updateService } from '../../API/services.js';

export const ServiceForm = ({ onClose, serviceData }) => {

  const { register, handleSubmit, reset } = useForm({});

  useEffect(() => {
    reset(serviceData);
  },[]);

  const onSubmited = async (data) => {

    try {

      const isEditMode = Boolean(serviceData.service_ID);
      const res = isEditMode ? await updateService(data) : await createService(data);

      if (!res.status) throw new Error(res.message);

      onClose();

      const confirm = await successAlert(isEditMode ? 'Editado con éxito' : 'Creado con éxito');

      if (confirm.isConfirmed) window.location.reload();

    } catch (err){
      onClose();
      errorAlert(err.message);
    }

  }
  
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden">

    <div className="w-full h-27 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-2xl flex items-center justify-between px-8 py-5">
      <p className="text-white text-2xl font-semibold">
        {serviceData?.service_ID ? "Edita el servicio" : "Crea un servicio"}
      </p>
      <Button variant="contained" color="error" onClick={onClose}>
        Cerrar
      </Button>
    </div>

    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmited)}>

        <div className="mb-6">
          <TextField label="Nombre del Servicio" variant="outlined" color='error' 
            {...register('service_name', { requiered : true })}  className='w-full'/>
        </div>

        <div className="mb-6">
          <TextField label="Descripción" variant="outlined" className='w-full'color='error'
           {...register('description', { requiered : true })}  multiline rows={4} />
        </div>

        <div className="mb-6">
          <TextField label="Precio" className='w-full' color='error' 
          {...register('price_type', { requiered : true })} variant="outlined" />
        </div>

        <Button type="submit" variant="contained" color="primary"
          className="bg-gradient-to-r w-full from-red-600 to-pink-600 text-white" >
          {serviceData.service_ID ? "Actualizar Servicio" : "Registrar Servicio"}
        </Button>
      </form>
    </div>
  </div>  
  )
}
