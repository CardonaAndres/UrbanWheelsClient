import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout  from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { menuStyles } from '../../../assets/js/menuStyles.js'
import { Link } from "react-router-dom"
import { useAuth } from '../../../context/AuthContext.jsx';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { routes } from '../../../assets/js/config.js';

export const UserOptions = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const { logoutFunction } = useAuth();
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);
  const onClicked = async () => { await logoutFunction() }

  return (
    <div className='mx-5 mt-2'>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', color : 'red' }}>
        <Tooltip title="Opciones" className='bg-red-500'>
          <Avatar aria-haspopup="true" sx={{ background : 'red' }}
          onClick={handleClick} size="small" aria-controls={open ? 'account-menu' : undefined} 
          aria-expanded={open ? 'true' : undefined} >
          </Avatar>
        </Tooltip>
      </Box>

      <Menu anchorEl={anchorEl} id="account-menu" open={open} className='mt-4' onClose={handleClose} onClick={handleClose} slotProps={menuStyles} 
        transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

        <Link to={routes.profile} className='mr-4'> 
          <MenuItem > 
          <AccountCircleIcon  style={{ color : 'red' }}  className="mr-4" /> Perfil 
          </MenuItem>  
        </Link>

        <Link to={routes.talkUs} className="mr-4"> 
          <MenuItem>
            <ContactSupportIcon style={{ color: 'red' }} className="mr-4" /> 
            ¿Qué nos quieres decir?
          </MenuItem>
        </Link>

        <Divider />

        <MenuItem onClick={onClicked}>
            <div> <Logout className='mr-4' style={{ color : 'red' }} /> </div>  Salir 
        </MenuItem>
      </Menu>
    </div>
  );
}
