import { Link } from 'react-router-dom';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import Button from '@mui/material/Button'
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from "../common/LoadingSpinner"

const NavbarHome = () => {
    
  const { loading, isAuth } = useAuth()

   if (loading) return <LoadingSpinner /> 

    return (
    <>
       <div className="shadow-md flex flex-col lg:flex-row p-4">

            <div className="lg:w-7 px-0 lg:px-5 text-left flex-grow mb-4 lg:mb-0">
                    <div className="flex items-center py-3">
                        <DriveEtaIcon className='h-10 w-10 text-red-500'/>
                        <h1 className='ml-2' >
                            <Button variant='contained' color='error'> UrbanWheels  </Button>
                        </h1>
                    </div>
            </div>
             
            {!isAuth && (
               <div className="flex items-center justify-between lg:justify-end flex-grow">
                  <div className="flex items-center">
                    
                    <div className='mr-8'>
                        <Link to="/login"> <Button variant="outlined" color="error"> Iniciar Sesión </Button> </Link>
                    </div>
                        
                    <div className="mr-1">
                    <Link to="/register"> <Button variant="contained" color="error"> Registrarme </Button> </Link>
                    </div>
                  </div>    
              </div> 
            )}
       
            {isAuth && (
              <div className="flex items-center justify-between lg:justify-end flex-grow">
                <div className="flex items-center">
                    <div className='mr-8'>
                    <Link to="/dashboard"> <Button variant="contained" color="error">Bienvenido</Button></Link>
                    </div>
                </div>
              </div>
            )}
            
       </div>  
        
    </>
    );
};

export default NavbarHome;
