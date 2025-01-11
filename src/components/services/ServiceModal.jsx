import { Modal, Box } from '@mui/material';
import { ServiceForm } from './ServiceForm'
import { modalStyles } from '../../assets/js/menuStyles.js';

export const ServiceModal = ({ open, onClose, serviceData = {} }) => {

    const data = {
        service_ID : serviceData.service_ID || null,
        service_name : serviceData.service_name || 'Ejemplo de nombre',
        description : serviceData.description || ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet, ducimus ipsam, repudiandae fugit eaque facilis aliquam error dolor nam cum porro doloribus recusandae aliquid sed. Labore exercitationem obcaecati quas.',
        price_type : serviceData.price_type || 'Ejemplo : por día'
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyles}>
                <ServiceForm onClose={onClose} serviceData={data} />
            </Box>
      </Modal>
    )


}


