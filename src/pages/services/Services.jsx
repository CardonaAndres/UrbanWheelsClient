import { useEffect, useState } from 'react'
import { Navbar } from '../../components/common/Navbar'
import { ServicesHeader } from '../../components/services/ServicesHeader'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'
import { getServices } from '../../API/services.js'
import { errorAlert } from '../../components/common/Alerts'
import { ServiceCard } from '../../components/services/ServiceCard.jsx'

export const Services = () => {

  const [ services, setServices ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ totalServices, setTotalServices ] = useState(0);


  useEffect(() => {

    const getAllServices = async () => {

        try {

          const res = await getServices();
          if(!res.status) throw new Error(res.message);

          setServices(res.data);
          setTotalServices(res.data.length);
        } catch (err) {
            errorAlert(err.message);
        } finally {  setLoading(false)  }
    }

    getAllServices();

  }, []);

  if(loading) return <LoadingSpinner />

  return (
  <>
    <Navbar />
    <ServicesHeader totalServices={totalServices} />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.service_ID} serviceData={service} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No services available</p>
        )}
      </div>
  
  </>
  )
}

