import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AdminAndWorker } from './AdminAndWorker';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RedIcon } from '../../../assets/js/menuStyles.js';
import { routes } from '../../../assets/js/config.js';


export  const AdminOptions = () =>  {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);

  return (
    <div className='pt-3 mx-3'>
      <Button color="error" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}   onClick={handleClick}>
       administrador
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}  MenuListProps={{'aria-labelledby': 'basic-button', }}>

        <Link to={routes.userManagement}>
          <MenuItem>
            <RedIcon>
              <AccountCircleIcon /> 
            </RedIcon>
            Gestion De Usuarios
          </MenuItem>
        </Link>

        <AdminAndWorker />
      
      </Menu>
    </div>
  );
}


