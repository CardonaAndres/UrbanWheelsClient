import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { AdminAndWorker } from './AdminAndWorker';

export const WorkerOptions = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () =>  setAnchorEl(null);

  return (
    <div className='pt-3 mx-3'>
      <Button color="error" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}   onClick={handleClick}>
          Empleado
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}  MenuListProps={{'aria-labelledby': 'basic-button', }}>

        <AdminAndWorker />

      </Menu>
  </div>
  )
}
