import { useEffect } from 'react';
import { Navbar } from '../../../components/common/Navbar.jsx';
import { LoadingSpinner } from "../../../components/common/LoadingSpinner.jsx"
import { Link, useNavigate } from 'react-router-dom';
import { useUserHook } from '../../../hooks/useUserHook.jsx';

export const Profile = () => {
    const navigate = useNavigate();
    const { userProfile, loading, getUserProfile } = useUserHook(navigate);

    useEffect(() => {
        getUserProfile();
    }, []);

  if (loading) return <LoadingSpinner /> 

  return (
    <>
     <Navbar />

        <div className="flex items-center justify-center mt-10">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl md:p-12 relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-red-600 rounded-t-lg"></div>

                <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 -mt-16 px-4">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMfF8lO8QsEl7MjT03lS2Bcr-LdNqpjIWQ&s" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4 text-white text-center md:text-left">
                        <div className="text-2xl font-semibold">{ userProfile.name } </div>              
                    </div>
                    <Link to="/dashboard">
                        <button className="absolute top-0 right-0 border-red-700 border-2 flex items-center bg-white text-red-600   font-semibold py-1 px-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-100 hover:text-red-700 focus:outline-none ">            
                            Volver
                        </button>
                    </Link>

                </div>
          
               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        
                    <div>
                        <label className="block text-red-500 font-semibold mb-2">Email</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.email}
                        </div>
                    </div>
                    <div className=''>
                        <label className="block text-red-500 font-semibold mb-2 ">Celular</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.cellphone}
                        </div>
                    </div>
                    <div>
                        <label className="block text-red-500 font-semibold mb-2">Edad</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.age}
                        </div>
                    </div>
                    <div className=''>
                        <label className="block text-red-500 font-semibold mb-2 ">Dirreción</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.address}
                        </div>
                    </div>
                    <div>
                        <label className="block text-red-500 font-semibold mb-2">Tipo documento</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.type_doc}
                        </div>
                    </div>
                    <div >
                        <label className="block text-red-500 font-semibold mb-2 ">Número de documento</label>
                        <div className='w-full p-3 border border-red-500 rounded-lg text-gray-500'>
                            {userProfile.number_doc}
                        </div>
                    </div>

                </div>  

                <div className="mt-8 text-center text-gray-600">
                    <p>
                        ¿Necesitas actualizar algún dato de tu perfil o eliminar tu cuenta? Estamos aquí para ayudarte. 
                        Por favor, ponte en contacto con nuestro equipo de soporte a través de la opción <Link to="/contact"> <strong>"¿Qué nos quieres decir?"</strong>.  </Link>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Agradecemos tu comprensión y colaboración para mantener tu información actualizada.
                    </p>
                    </div>                          
            </div>
        </div> 

    </>
  )
}
