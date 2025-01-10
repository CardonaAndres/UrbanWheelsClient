import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../assets/js/config.js";
import { CarServiceModal } from "./carServiceModal.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const CarServiceHeader = ({ car }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const isAdminMode = location.pathname.startsWith(routes.carServiceAdminMode); 

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-6 shadow-lg">
      
      <div className="text-xl font-extrabold text-red-500">
        Gestiona los servicios del auto
      </div>

      <div className="flex items-center space-x-4">
          {isAdminMode ? (
            <>
              <Link to={routes.cars}>
                  <Button variant="contained" color="error" size="small">
                    Volver
                  </Button>
              </Link>

              <Button variant="contained" color="error" size="small" onClick={handleOpen}>
                + Agregar Servicio
              </Button>

              <CarServiceModal open={modalOpen} onClose={handleClose} serviceData={car} />
            
            </>
          ) : ( 
            <Link to={routes.dashboard}>
                <Button variant="contained" color="error" size="small">
                  Volver
                </Button>
            </Link>
          )}
      </div>
    </div>
  );
};
