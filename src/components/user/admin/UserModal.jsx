import { Modal, Box } from '@mui/material';
import { UserData } from './UserData';
import { modalStyles } from '../../../assets/js/menuStyles';

export const UserModal = ({ open, onClose, selectedUser }) => {
  return (
    <Modal open={open} onClose={onClose}>
    <Box sx={modalStyles}>
      {selectedUser && <UserData onClose={onClose} userData={selectedUser} />}
    </Box>
  </Modal>
  )
}

