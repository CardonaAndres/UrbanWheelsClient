import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { UserOptions } from '../user/options/UserOptions';
import { AdminOptions } from '../user/options/AdminOptions.jsx';
import { useEffect, useState } from 'react';
import { WorkerOptions } from '../user/options/WorkerOptions.jsx';
import { LoadingSpinner } from "./LoadingSpinner.jsx"
import { useAuth } from '../../context/AuthContext.jsx';

export const Navbar = () => {

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    
    if(user.rol_ID) setLoading(false)
    
  }, [user]);

  if (loading) return <LoadingSpinner /> 

  return (
    <div className="shadow-md flex flex-col lg:flex-row p-4">

        <div className="lg:w-7 px-0 lg:px-5 text-left flex-grow mb-4 lg:mb-0">
            <div className="flex items-center py-3">
              <DriveEtaIcon className='h-10 w-10 text-red-500'/>
              <Link to="/" >
                <div className='ml-2' > 
                  <Button variant='contained' color='error'> UrbanWheels </Button> 
                </div> 
              </Link>                                                   
            </div>
        </div>

      {(user.rol_ID === 1 || user.rol_ID === 2) && <WorkerOptions />} 
      {user.rol_ID === 1 && <AdminOptions /> }       
      <UserOptions/>
        
    </div>
  )
}
