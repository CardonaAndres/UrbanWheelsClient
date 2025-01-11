import { Button } from "@mui/material"
import { useState } from "react";
import { TypeDocModal } from "./TypeDocModal";

export const HeaderTypeDocs = ({ totalTypeDocs }) => {
    const [ modalStatus, setModalStatus ] = useState(false);
    const handleModal = () => setModalStatus(!modalStatus);

    return (
        <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
            <div className="text-2xl font-bold text-gray-800 m-4">Tipos de documentos permitidos</div>
            <div>
                <Button color='error' onClick={handleModal} >
                    + Agregar
                </Button>
                <TypeDocModal open={modalStatus} onClose={handleModal} />
                <span className="text-lg font-medium px-5 text-gray-600"> | </span>

                <span className="text-lg font-medium text-gray-600">
                    Total : <span className="text-red-600 font-semibold"> {totalTypeDocs} </span>
                </span>

            </div>
        </div>
    )
}

