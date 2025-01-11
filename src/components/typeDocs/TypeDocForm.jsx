import { useTypeDocs } from "../../hooks/useTypeDocs";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { successAlert, errorAlert } from '../common/Alerts';
import { useForm } from "react-hook-form";

export const TypeDocForm = ({ onClose, data }) => {

  const isEditMode = data.type_doc_ID !== null;
  const { registerTypeDocFunc, updateTypeDocFunc, loading } = useTypeDocs();
  const { register, handleSubmit } = useForm({
    defaultValues: { 
      type_doc_ID: data.type_doc_ID,
      typeDoc: data.type_doc
    }
  });

  const onSubmited = handleSubmit(async (data) => {
    const res = isEditMode ? await updateTypeDocFunc(data) : await registerTypeDocFunc(data);
    if(res.status){
      onClose();
      await successAlert(
        `Tipo de documento ${isEditMode ? 'actualizado' : 'creado'} correctamente`
      );
      window.location.reload();
      return;
    }

    onClose();
    errorAlert(res.message);

  });

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-2xl font-semibold text-red-600 mb-6 text-center">
          {isEditMode ? 'Editar Tipo de Documento' : 'Nuevo Tipo de Documento'}
        </div>
        <form className="space-y-6" onSubmit={onSubmited}>
          <div>
            <label htmlFor="documentType"
              className="block text-sm font-medium text-gray-700 mb-1" >
              {isEditMode ? 'Editar Tipo de Documento' : 'Tipo de Documento'}
            </label>
            <input
              type="text" {...register("typeDoc", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="Ingrese el tipo de documento"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all">
            {isEditMode ? 'Editar' : 'Guardar'}
          </button>
        </form>
        <button onClick={onClose}
          className="mt-4 w-full text-red-600 font-medium py-2 px-4 rounded-md border border-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all">
          Cancelar
        </button>
      </div>
    </div>
  );
};
