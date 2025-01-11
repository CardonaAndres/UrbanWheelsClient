import { Modal, Box } from '@mui/material';
import { modalStyles } from '../../assets/js/menuStyles.js';
import { TypeDocForm } from './TypeDocForm.jsx';

export const TypeDocModal = ({ onClose, open, data = {} }) => {
    const dataFormat = {
        type_doc_ID: data.type_doc_ID || null,
        type_doc: data.type_doc || ''   
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyles}>
                <TypeDocForm onClose={onClose} data={dataFormat} />
            </Box>
        </Modal>
    )

}
