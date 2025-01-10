import { CarServiceForm } from "./CarServiceForm";
import { modalStylesSmall } from '../../assets/js/menuStyles.js';
import { Modal, Box } from '@mui/material';

export const CarServiceModal = ({ open, onClose, serviceData = {}}) => {

  const data = {

    car_service_ID : serviceData.car_service_ID || null,
    car_ID : serviceData.car_ID || null,
    service_ID : serviceData.service_ID || 1,
    price : serviceData.price || 0

  }

  return (
    <Modal open={open} onClose={onClose}>
        <Box sx={modalStylesSmall}>
            <CarServiceForm onClose={onClose} serviceData={data}/>
        </Box>
    </Modal>
  )
}
