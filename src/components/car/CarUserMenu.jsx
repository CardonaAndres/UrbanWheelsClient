import { useState } from "react"
import { Button, MenuItem, Menu, ListItemIcon, ListItemText} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { RedIcon } from "../../assets/js/menuStyles";
import { routes } from "../../assets/js/config";
import { Link } from "react-router-dom";

export const CarUserMenu = ({ carInfo  }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);

  return (
    <>
     <Button color="error" className='w-full' variant="contained" 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"  aria-expanded={open ? 'true' : undefined}   onClick={handleClick}>
                Saber más
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}  
          MenuListProps={{'aria-labelledby': 'basic-button', }} >
          
          <Link to={routes.carService} state={{ car_ID : carInfo.car_ID }}>
            <MenuItem >
              <ListItemIcon>
                <RedIcon> <AssignmentIcon fontSize="small" /></RedIcon>
              </ListItemIcon>
              <ListItemText primary="Más informacion" />
            </MenuItem>           
           </Link>
        
      </Menu>
    
    
    </>
  )
}
