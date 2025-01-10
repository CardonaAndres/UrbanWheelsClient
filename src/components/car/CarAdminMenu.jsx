import { useState } from 'react';
import { Button, MenuItem, Menu, ListItemIcon, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from 'react-router-dom';
import { useCar } from '../../hooks/useCars.jsx';
import { RedIcon } from '../../assets/js/menuStyles.js';
import { routes } from '../../assets/js/config.js';
import { CarModal } from './CarModal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export const CarAdminMenu = ({ carInfo }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const { user } = useAuth();
  const open = Boolean(anchorEl);
  
  const { deleteCarFunc } = useCar();  // Usamos la lógica del hook
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button 
        color="error" 
        className="w-full" 
        variant="contained" 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true" 
        aria-expanded={open ? 'true' : undefined}   
        onClick={handleClick}>
        Opciones
      </Button>

      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleClose}  
        MenuListProps={{'aria-labelledby': 'basic-button'}} 
      >

        {(user.rol_ID === 1) && (
          <div>
            <MenuItem onClick={() => { handleOpenModal(); handleClose(); }} >
              <ListItemIcon>
                <RedIcon><EditIcon fontSize="small" /></RedIcon>
              </ListItemIcon>
              <ListItemText primary="Editar" />
            </MenuItem>

            <MenuItem onClick={() => { deleteCarFunc(carInfo.car_ID); handleClose(); }}>
              <ListItemIcon>
                <RedIcon><DeleteIcon fontSize="small" /></RedIcon>
              </ListItemIcon>
              <ListItemText primary="Borrar" />
            </MenuItem>
          </div>
        )}

        <Link to={routes.carServiceAdminMode} state={{ car_ID: carInfo.car_ID }}>
          <MenuItem>
            <ListItemIcon>
              <RedIcon><AssignmentIcon fontSize="small" /></RedIcon>
            </ListItemIcon>
            <ListItemText primary="Gestionar servicios" />
          </MenuItem>
        </Link>
      </Menu>

      <CarModal open={modalOpen} onClose={handleCloseModal} carData={carInfo} />
    </>
  );
};
