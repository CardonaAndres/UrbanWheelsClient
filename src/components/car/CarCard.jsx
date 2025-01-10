import { format } from 'date-fns';
import { CarAdminMenu } from './CarAdminMenu';
import { CarUserMenu } from './CarUserMenu';
import { useLocation } from 'react-router-dom';
import { routes } from '../../assets/js/config';

export const CarCard = ({ car }) => {

  const location =  useLocation();
  const isAdminMode = location.pathname.startsWith(routes.cars);

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 transition-all duration-300">

      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={car.image_url}
          alt={car.model}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-6 space-y-4">

        <div className="text-l font-serif text-gray-800 font-semibold mb-2">
          {car.brand} - {car.model}
        </div>


        <div className="text-lg text-gray-600 space-y-1">
          {isAdminMode && <p><strong>ID:</strong> {car.car_ID}</p>}
          <p><strong>Año:</strong> {car.year}</p>
          <p><strong>Placa:</strong> {car.plate}</p>
          <p><strong>Kilometros:</strong> {car.kilometre} km</p>
          <p><strong>Color:</strong> {car.color}</p>
          <p> 
            {isAdminMode && (
              <>
              <strong>Fecha de Adquisición: </strong> 
              {format(new Date(car.acquisition_date), 'dd/MM/yyyy')}
              </>
            )}
          </p>

          <p><strong>Estado:</strong>
            <span
              className={`font-semibold m-2 ${ 
                car.name_state === "Disponible" ? "text-green-600": "text-gray-600" }`}>
              {car.name_state}
            </span>
          </p>

          <p><strong className='mr-2'>Tipo: </strong> {car.name_type}</p>
        </div>

        <div className="mt-4">
            { isAdminMode ? <CarAdminMenu carInfo={car} /> : <CarUserMenu carInfo={car} />  }
        </div>
      </div>
    </div>
  );
};
