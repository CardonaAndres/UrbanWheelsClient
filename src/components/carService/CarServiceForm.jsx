import { useEffect, useState } from "react"
import { getServices } from '../../API/services.js'
import { LoadingSpinner } from '../common/LoadingSpinner'
import { errorAlert, successAlert } from '../common/Alerts.jsx'
import { useForm } from "react-hook-form"
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, } from '@mui/material';
import { addCarService, updateCarService } from "../../API/carService.js"

export const CarServiceForm = ({ onClose, serviceData}) => {

  const { register, handleSubmit, reset } = useForm({
    defaultValues : {
      car_service_ID : serviceData.car_service_ID,
      car_ID : serviceData.car_ID,
      price : serviceData.price,
    }
  });

  const [ services, setServices ] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    const getAllServices = async () => {

      try {
        const res = await getServices();
        if(!res.status) throw new Error(res.message);
        setServices(res.data);
      } catch (err){
        onClose(); errorAlert(err.message);
      } finally {
       setLoading(false)
      }
    }

    getAllServices();

  }, []);

  const onSubmit = async (data) => {
    
    try {
      setLoading(true);

      const isEditMode = Boolean(data.car_service_ID);
      const message = isEditMode ? 'Editado con exito' : 'Creado con exito'

      const res = isEditMode ? await updateCarService(data) : await addCarService(data);
      if(!res.status) throw new Error(res.message);

      onClose();
      const confirm = await successAlert(message);
      if(confirm.isConfirmed) window.location.reload();

    } catch (err) {
      onClose();
      errorAlert(err.message);
    } finally {
      setLoading(false);
    }

  };

  if(loading) return <LoadingSpinner />

  return (
    <>
    <div className="w-full h-27 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-2xl 
      flex items-center justify-between px-8 py-5">
        <p className="text-white text-2xl font-semibold">
          {serviceData.car_service_ID ? "Edita el servicio del coche" : "Registra el servicio del coche"}
        </p>
      <Button variant="contained" color="error" onClick={onClose} className="p-3">
        Cerrar
      </Button>
    </div>

    <form className="space-y-6 pt-8 px-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <TextField label="Precio" variant="outlined"color="error"
          className="w-full" {...register("price", { required: "El modelo es obligatorio" })} />

        <FormControl fullWidth color="error">
          <InputLabel>Servicio</InputLabel>
          <Select label="Servicio"  defaultValue={serviceData.service_ID}
          {...register('service_ID', { required: "El estado es obligatorio" })}>

            {services.map((service) => (
              <MenuItem key={service.service_ID} value={service.service_ID}>
                {service.service_name}
              </MenuItem>
            ))}

          </Select>
        </FormControl>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outlined" color="none" onClick={() => reset()}>
          Limpiar
        </Button>

        <Button type="submit" variant="contained" color="error" >
          {serviceData.car_service_ID ? "Actualizar" : "Registrar"}
        </Button>
      </div>
    </form>
  </>
  )
}


