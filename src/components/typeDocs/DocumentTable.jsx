import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { TypeDocModal } from './TypeDocModal';
import { useState } from 'react';
import { useTypeDocs } from '../../hooks/useTypeDocs';
import { confirmAlert, errorAlert, successAlert } from '../common/Alerts';

export const DocumentTable = ({ documents }) => {

    const { deleteTypeDocFunc } = useTypeDocs();
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ documentSelect, setDocumentSelect ] = useState();
    const handleModalStatus = (doc) => {
        setDocumentSelect(doc);
        setModalStatus(!modalStatus);
    }

    const handleDelete = async (doc) => {
        const warningAlert = await confirmAlert('¿Estás seguro de eliminar este tipo de documento?');
        if (!warningAlert.isConfirmed) await successAlert('Cancelado con éxito');
        const res = await deleteTypeDocFunc(doc.type_doc_ID);
        if(res.status){
            await successAlert(res.res.message);
            window.location.reload();
            return;
        }
        errorAlert(res.message);
           
    }

    return (
        <div className="w-full overflow-x-auto bg-white rounded-lg shadow p-20">
                <table className="w-full min-w-full divide-y divide-red-200">
                <thead className="bg-red-50">
                    <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-red-900">
                        ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-red-900">
                        Tipo de Documento
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-red-900">
                        Acciones
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-red-200">
                    {documents.map((doc) => (
                    <tr  key={doc.type_doc_ID}
                        className="transition-colors hover:bg-red-50" >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.type_doc_ID}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.type_doc}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <IconButton onClick={() => {handleModalStatus(doc)}}
                            className="text-red-600 hover:text-red-900"
                            size="small" >
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            onClick={() => {handleDelete(doc)}}
                            className="text-red-600 hover:text-red-900"
                            size="small"
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>

                {modalStatus && documentSelect && (
                    <TypeDocModal 
                        open={modalStatus} 
                        onClose={handleModalStatus} 
                        data={documentSelect}   
                    />
                )}
            </div>
    )
}
