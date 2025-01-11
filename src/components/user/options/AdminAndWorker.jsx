import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
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
          Vehiculos
        </MenuItem>
      </Link>

      <Link to={routes.services} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <RedIcon>
            <BuildIcon />
          </RedIcon>
          Servicios
        </MenuItem>
      </Link>

      <Link to={routes.typeDocs} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <RedIcon>
            <DocumentScannerIcon />
          </RedIcon>
          Tipos de documentos
        </MenuItem>
      </Link>

      <Link to={routes.services} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <RedIcon>
            <AssignmentTurnedInIcon />
          </RedIcon>
          Estados
        </MenuItem>
      </Link>

      <Link to={routes.services} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <RedIcon>
            <LocalOfferIcon />
          </RedIcon>
          Marcas de vehiculos
        </MenuItem>
      </Link>

      <Link to={routes.services} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <RedIcon>
            <CategoryIcon />
          </RedIcon>
          Tipos de vehiculos
        </MenuItem>
      </Link>
    </>
  );
};
