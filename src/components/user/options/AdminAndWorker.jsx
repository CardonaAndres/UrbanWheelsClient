import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import { routes } from '../../../assets/js/config.js';
import { RedIcon } from '../../../assets/js/menuStyles.js';

export const AdminAndWorker = () => {
  return (
    <>
      <Link to={routes.cars} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <RedIcon>
              <DirectionsCarIcon />
            </RedIcon>
            Gestion de vehiculos
          </MenuItem>
        </Link>

        <Link to={routes.services} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <RedIcon>
              <BuildIcon />
            </RedIcon>
            Gestion de nuestros servicios
          </MenuItem>
        </Link>
    </>
  )
}
