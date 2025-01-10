import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { LoadingSpinner } from "../../common/LoadingSpinner.jsx";
import { errorAlert, successAlert, confirmAlert } from "../../common/Alerts.jsx";
import { useUserHook } from "../../../hooks/useUserHook.jsx";

export const UserData = ({ onClose, userData }) => {
  const { roles, typeDocs, getRolesRequest, getTypeDocsRequest, updateUser, 
      deleteUserAccount } = useUserHook();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true);
  const onCliked = handleSubmit(async (values) => updatedUser(values));

  const updatedUser = async (newUserData) => {
    try {
      newUserData.idUser = userData.user_ID;
      await updateUser(newUserData);
      onClose();
      const success = await successAlert("Datos actualizados con éxito");
      if (success.isConfirmed) window.location.reload();
    } catch (err) {
      onClose();
      errorAlert(err.message);
    }
  }

  const deleteUserAcction = async () => {
    try {
      onClose();
      const confirmDelete = await confirmAlert("¿Seguro?");
      if (!confirmDelete.isConfirmed) return successAlert('Cancelado con éxito');
      await deleteUserAccount(userData.user_ID);  
      const confirm = await successAlert("Usuario eliminado con éxito");
      if(confirm.isConfirmed) return window.location.reload();
    } catch (err) {
      errorAlert(err.message);
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        await getRolesRequest();
        await getTypeDocsRequest();
      } catch (err) {
        errorAlert(err.message);
        navigate('/UserManagement');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [navigate, getRolesRequest, getTypeDocsRequest]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="w-full h-32 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-2xl flex items-center justify-between px-8 py-5">
        <div className="text-white text-3xl font-semibold">Detalles del Usuario - {userData.rol_name}</div>
        <Button variant="contained" color="error" onClick={onClose} className="p-3 rounded-full" startIcon={<CloseIcon />}>
          Cerrar
        </Button>
      </div>

      <div className="pt-5 px-8 pb-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <div>
            <label className="block text-red-500 font-semibold mb-2">Nombre</label>
            <input type="text" className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('name')} defaultValue={userData.name} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('email')} defaultValue={userData.email} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Número de documento</label>
            <input type="number" className="w-full p-3 mb-5 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('number_doc')} defaultValue={userData.number_doc} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Tipo de documento</label>
            <select {...register('type_doc_ID', { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600"
              defaultValue={userData.type_doc_ID}>
              {typeDocs.map((typeDoc, index) => (
                <option value={typeDoc.type_doc_ID} key={index}>
                  {typeDoc.type_doc}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Edad</label>
            <input type="text" className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('age')} defaultValue={userData.age} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Celular</label>
            <input type="tel" className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('cellphone')} defaultValue={userData.cellphone} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Dirección</label>
            <input type="text" className="w-full p-3 mb-5 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register('address')} defaultValue={userData.address} />
          </div>

          <div>
            <label className="block text-red-500 font-semibold mb-2">Rol</label>
            <select {...register('rol_ID', { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600">
              <option value={userData.rol_ID}> {userData.rol_name} </option>
              {roles.map((rol, index) => (
                <option value={rol.rol_ID} key={index}> {rol.rol_name} </option>
              ))}
            </select>
          </div>

        </div>

      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <Button color="error" onClick={onCliked}>Actualizar datos</Button>
        <Button color="error" onClick={deleteUserAcction}>Borrar cuenta</Button>
      </div>

    </>
  );
}
