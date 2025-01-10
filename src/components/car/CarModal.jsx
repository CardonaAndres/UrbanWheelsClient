import { Modal, Box } from '@mui/material';
import  { CarForm } from './CarForm'
import imageDefault from '../../assets/img/carRents/car-rent-5.png'
import { format } from 'date-fns';
import { modalStyles } from '../../assets/js/menuStyles';

export const CarModal = ({ open, onClose, carData = {} }) => {
  
  const acquisitionDate = carData.acquisition_date
  ? format(new Date(carData.acquisition_date), 'yyyy-MM-dd')
  : '2006-06-08';

    const formData = {
        car_ID : carData.car_ID || null,
        image_url: carData.image_url || imageDefault, 
        model: carData.model || 'BMW Serie 3', 
        year: carData.year || '2022', 
        plate: carData.plate || 'ABC123', 
        kilometre: carData.kilometre || '15000', 
        color: carData.color || 'Negro', 
        acquisition_date: acquisitionDate, 
        status_ID: carData.status_ID ||  1,
        brand_ID: carData.brand_ID ||   1,
        car_type_ID: carData.car_type_ID || 1
      };
      

  return (
    <Modal open={open} onClose={onClose}>
    <Box sx={modalStyles}>
        <CarForm carData={formData} onClose={onClose} />
    </Box>
  </Modal>
  )
}


