import { useState } from 'react';
import { Button, TextField, MenuItem, Menu } from '@mui/material';
import { People } from '@mui/icons-material';

export const HeaderComponent = ({ onSearch, register, totalUsers, onRoleChange  }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);
  const handleRoleSelect = (roleId) => {onRoleChange(roleId); setAnchorEl(null)};

  return (
    <div className='bg-gray-100 p-4 shadow-md mx-auto flex flex-col lg:flex-row 
    justify-between items-center'>
        <div className="text-2xl font-bold text-gray-800 my-2 mx-6 flex items-center">
            <People className="text-red-500 mr-2" /> 
            Lista de Usuarios
        </div>

        
        <div className="flex items-center space-x-2">
            <TextField {...register('LookForEmail', { required : true })} label="Buscar Usuario Por Correo"
            variant="standard" color="error" className="w-64" />

            <div className='mt-5'>
              <Button color="error" variant="contained" onClick={onSearch}> 
                Buscar  
              </Button>     
            </div>              
        </div>

        <div className='mt-4'>
          <Button color="error" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"  aria-expanded={open ? 'true' : undefined}  variant="contained"  onClick={handleClick}>
              Filtrar Usuarios 
              </Button>
              <Menu className='mt-3' anchorEl={anchorEl} open={open} onClose={handleClose}  MenuListProps={{'aria-labelledby': 'basic-button', }}>

                  <MenuItem onClick={() => handleRoleSelect(0)}>Todos los usuarios</MenuItem>
                  <MenuItem onClick={() => handleRoleSelect(1)}>Administradores</MenuItem>
                  <MenuItem onClick={() => handleRoleSelect(2)}>Trabajadores</MenuItem>
                  <MenuItem onClick={() => handleRoleSelect(3)}>Clientes</MenuItem>
                        
              </Menu>
        </div>
        

        <p className="my-2 text-gray-600 text-sm">
        Total de Usuarios: <span className="font-semibold text-red-500">{totalUsers}</span>
        </p>
    </div>
  )
}
