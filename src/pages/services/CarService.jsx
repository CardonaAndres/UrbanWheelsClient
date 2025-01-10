import { useEffect, useState } from "react"
import { Navbar } from "../../components/common/Navbar"
import { CarServiceHeader } from "../../components/carService/CarServiceHeader";
import { useNavigate, useLocation  } from "react-router-dom";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { routes } from "../../assets/js/config";
import { getAllCarServices } from "../../API/carService";
import { errorAlert } from "../../components/common/Alerts";
import { CarDetails } from "../../components/carService/CarDetails";

export const CarService = () => {

    const navigate = useNavigate();
    const location = useLocation(); 
    const car_ID = location.state?.car_ID; 
    const [ loading, setLoading ] = useState(true);
    const [ car, setCar ] = useState({});
    const [ carServices, setCarServices ] = useState([]);

    useEffect(() => {
        if(!car_ID) return navigate(routes.cars);

        const getData = async car_ID => {

            try {
                const res = await getAllCarServices(car_ID);
                if(!res.status) throw new Error(res.message || 'Error volver a intentar más tarde');
                setCar(res.data.car); setCarServices(res.data.car.services);

            } catch (err) {errorAlert(err.message); navigate(routes.cars)} finally { setLoading(false)}
        }

        getData(car_ID);

    }, [car_ID, navigate]);

  if (loading) return <LoadingSpinner />

  return (
    <>
        <Navbar />      
        <CarServiceHeader car={car}/>
        <div>
            <CarDetails car={car} services={carServices}/>
        </div>
    
    </>
  )
}
