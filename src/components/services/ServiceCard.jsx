import { Button } from "@mui/material";
import { Edit, Delete } from '@mui/icons-material';
import { useState } from "react";
import { ServiceModal } from "./ServiceModal";
import { deleteService } from "../../API/services";
import { confirmAlert, errorAlert, successAlert } from '../common/Alerts'

export const ServiceCard = ({ serviceData }) => {

    const [modalOpen, setModalOpen] = useState(false); 
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const deleteFunction = async serviceID => {

      try {
        const confirmDelete = await confirmAlert("Seguro");
        if (!confirmDelete.isConfirmed) return successAlert('Cancelado con exito');
            
        const res = await deleteService(serviceID);
        if(!res.status) throw new Error('Hubo un error, volver ha intentarlo');

        const confirm = await successAlert('Eliminado con exito')
        if(confirm.isConfirmed) window.location.reload();

      } catch (err) {
        errorAlert(err.message)
      }
        
    }

  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300">

      <div className="bg-gradient-to-r from-red-700 to-pink-700 p-6">
        <div className="text-white text-2xl font-extrabold truncate">
          {serviceData.service_name }
        </div>
        <p className="text-white text-sm mt-1">
          ID: {serviceData.service_ID }
        </p>
      </div>

      <div className="p-6 bg-gray-50">

        <p className="text-gray-700 text-sm mb-4 font-medium">
          {serviceData.description }
        </p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-900 text-lg font-semibold">
            <span className="text-red-700">Modo de cobro:</span> {serviceData.price_type}
          </p>
        </div>

        <div className="flex">
            <div className="w-full m-2">
                <Button fullWidth variant="outlined" color="error" size="small" 
                   onClick={handleOpen}  startIcon={<Edit />}>
                    Editar
                </Button>

                <ServiceModal onClose={handleClose} open={modalOpen} serviceData={serviceData} />
            </div>

            <div className="w-full m-2">
                <Button variant="contained" color="error" fullWidth size="small" 
                  onClick={() => deleteFunction(serviceData.service_ID) }  startIcon={<Delete />} >
                    Eliminar
                </Button>
            </div>

        </div>
      </div>
    </div>
  );
};
