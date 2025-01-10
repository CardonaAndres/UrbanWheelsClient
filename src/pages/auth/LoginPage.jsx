import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { LoadingSpinner } from "../../components/common/LoadingSpinner.jsx"
import { Button } from "@mui/material";
import fondo from "../../assets/img/fondoCar.png";
import { useAuth } from "../../context/AuthContext.jsx";
import { routes } from "../../assets/js/config.js";

export const LoginPage = () => {

  const { loading, signin, isAuth } = useAuth()
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); 
  const onSubmited = handleSubmit(async (values) => await signin(values));

  useEffect(() => {
    if(isAuth) navigate(routes.dashboard);
  }, [isAuth]);

  if (loading) return <LoadingSpinner /> 

  return (
    <div className="flex h-screen card">   
    
      <div className="hidden lg:flex w-1/2 bg-red-100 items-center justify-center">
        <img src={fondo} alt="Login" className="object-cover image"/> 
      </div>

      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center bg-white p-8">
        <div className="text-3xl font-semibold mb-6">Iniciar Sesión</div>

        <form className="w-full max-w-md space-y-4" >
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" placeholder="Email" {...register('email',{ required : true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input type="password" placeholder="Contraseña"  {...register('password',{ required : true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-600" />
          </div>

          <Button color="error" variant="contained" onClick={onSubmited} className="w-full"> Iniciar Sesión </Button>
          <Button color="error" className="w-full"> ¿Olvidaste Tu Contraseña?  </Button>
  
          <p className="text-sm text-center mt-4 text-gray-600">
            ¿No tienes cuenta? 
            <Link to={routes.register} className="text-red-500 hover:underline mx-3">  Registrate </Link>

          </p>
        </form>
      </div>
  </div>
  )

}
