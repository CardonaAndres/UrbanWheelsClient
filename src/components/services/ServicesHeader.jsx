import { useState } from 'react';
import { ServiceModal } from './ServiceModal';
import { Button } from '@mui/material';

export const ServicesHeader = ({ totalServices = 0 }) => {

  const [modalOpen, setModalOpen] = useState(false); 
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md">

        <div className="text-2xl font-bold text-gray-800">Nuestros Servicios</div>

        <div className="flex items-center space-x-4">
          <Button  variant="contained" color='error' onClick={handleOpen}>
              Crear Servicio
          </Button>
          <span className="text-lg font-medium text-gray-600">
              |
          </span>
          <span className="text-lg font-medium text-gray-600">
              Total servicios: <span className="text-red-600 font-semibold"> {totalServices} </span>
          </span>

          <ServiceModal open={modalOpen} onClose={handleClose} />
        </div>
  </div>
  )
}
