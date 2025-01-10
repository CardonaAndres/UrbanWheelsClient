
import Button from '@mui/material/Button'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import carRent1 from '../../assets/img/carRents/car-rent-1.png';
import carRent2 from '../../assets/img/carRents/car-rent-2.png';
import carRent3 from '../../assets/img/carRents/car-rent-3.png';
import carRent4 from '../../assets/img/carRents/car-rent-4.png';
import carRent5 from '../../assets/img/carRents/car-rent-5.png';
import carRent6 from '../../assets/img/carRents/car-rent-6.png';


export const RentCar = () => {
    const cars = [
        { id: 1, name: 'Mercedes Benz R3', imgSrc: carRent1, year: 2020, type: 'AUTO', mileage: '15K', price: '$180.000 - Día' },
        { id: 2, name: 'BMW X5', imgSrc: carRent2, year: 2021, type: 'MANUAL', mileage: '10K', price: '$200.000 - Día' },
        { id: 3, name: 'Audi Q7', imgSrc: carRent3, year: 2022, type: 'HÍBRIDO', mileage: '8K', price: '$250.000 - Día' },
        { id: 4, name: 'Toyota Corolla', imgSrc: carRent4, year: 2019, type: 'AUTO', mileage: '30K', price: '$160.000 - Día' },
        { id: 5, name: 'Mercedez Benz ', imgSrc: carRent5, year: 2023, type: 'MANUAL', mileage: '5K', price: '$300.000 - Día' },
        { id: 6, name: 'Audi R3', imgSrc: carRent6, year: 2018, type: 'AUTO', mileage: '40K', price: '$150.000 - Día' },
    ];
    
    

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto pt-5 pb-3">
                <div className="text-4xl text-center mb-5 ">
                    <Button color='error' variant='contained'>Encuentra tu carro</Button> 
                </div>
                <div className="flex flex-wrap -mx-2">
                    {cars.map(car => (
                        <div key={car.id} className="w-full md:w-1/2 lg:w-1/3  rounded-lg w-full overflow-hidden transition-transform transform hover:scale-90">
                            <div className="rent-item mb-4 border rounded-lg shadow-lg overflow-hidden p-8">
                                <img className="img-fluid mb-4" src={car.imgSrc} alt={`Image of ${car.type}`} />
                                <h4 className="text-uppercase mb-4 text-center">{car.name}</h4>
                                <div className="flex justify-center mb-4">
                                    <div className="px-2 flex items-center">
                                        <DriveEtaIcon className='h-10 w-10 text-red-500 mr-2'/>
                                        <span>{car.year}</span>
                                    </div>
                                    <div className="px-2 border-l border-r flex items-center">
                                        {/* <CarIcon className="text-primary mr-1" />*/} 
                                        <span>{car.type}</span>
                                    </div>
                                    <div className="px-2 flex items-center">
                                        {/* <CarIcon className="text-primary mr-1" />*/} 
                                        <span>{car.mileage}</span>
                                    </div>
                                </div>
                                <a className="bg-red-600 text-white block text-center px-3 py-2 rounded hover:bg-red-300 transition duration-200" href="#">
                                    {car.price}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
