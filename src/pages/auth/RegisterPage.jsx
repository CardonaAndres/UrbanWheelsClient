import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import{ getTypeDocs } from "../../API/typeDocs.js";
import { errorAlert } from "../../components/common/Alerts.jsx";
import { LoadingSpinner } from "../../components/common/LoadingSpinner.jsx"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"; 
import fondo from "../../assets/img/fondo2Car.png";
import { routes } from "../../assets/js/config.js";

export const RegisterPage = () => {

  const navigate = useNavigate(); 
  const { register, handleSubmit } = useForm();
  const [ typeDocs, setTypeDocs ] = useState([]);
  const { signup, loading, setLoading, isAuth } = useAuth();

  const onSubmited = handleSubmit(async (values) => {
    const res = await signup(values)
    if(res) navigate(routes.login);

  });

  useEffect(() => {

    if(isAuth) return navigate(routes.dashboard)

    const TypeDocs = async () => {

      try {
        setLoading(true);
        const res = await getTypeDocs();
        if(!res.status) throw new Error(res.message);
        setTypeDocs(res.data);

      } catch(err) {
        errorAlert(err.message);
        navigate(routes.home);
      } finally {
        setLoading(false)
      }
    }

    TypeDocs();

  }, [navigate, isAuth]);

  if (loading) return <LoadingSpinner /> 

  return (
    
    <div className="flex h-screen bg-gray-100">
    <div className="flex w-full max-w-6xl mx-auto my-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="text-xl font-semibold text-center text-gray-700 mb-3">Registrarse</div>

        <form onSubmit={onSubmited} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input type="email"  placeholder="Correo" {...register("email", { required: true })}        
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600"  />        
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de documento</label>
            <select
              {...register('type_doc_ID', { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" >
              {typeDocs.map((typeDoc, index) => (
                <option value={typeDoc.type_doc_ID} key={index}>
                  {typeDoc.type_doc}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Número de documento</label>
              <input type="number" placeholder="Número de documento" 
                {...register("number_doc", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Edad</label>
                <input placeholder="Edad" type="number" 
                  {...register("age", { required: true })}                                      
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />               
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Celular</label>
              <input type="number" placeholder="Celular" 
                {...register("cellphone", { required: true })}                                           
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />           
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección</label> 
              <input type="text" placeholder="Dirección" 
                {...register("address", { required: true })}                      
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600"  />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                {...register("confirmPassword", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <Button color="error" variant="contained" type="submit" className="w-full mt-4">
            Registrarse
          </Button>

          <div className="text-sm text-center mt-4 text-gray-600">
            ¿Ya tienes cuenta?
            <Link to={routes.login} className="text-red-500 hover:underline mx-2">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex w-1/2 bg-red-100 items-center justify-center"> 
        <img src={fondo} alt="Register" className="object-cover" />
      </div>
    </div>
  </div>

  )
}