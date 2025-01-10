import React from 'react';
import Button from '@mui/material/Button';
import CarRentalIcon from '@mui/icons-material/DirectionsCar';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import InspectionIcon from '@mui/icons-material/CheckCircle';
import RepairIcon from '@mui/icons-material/Build';
import PaintIcon from '@mui/icons-material/Brush';
import CleanIcon from '@mui/icons-material/CleaningServices';

const services = [
    {
        id: 1,
        title: 'Car Rental',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <CarRentalIcon fontSize="large" className="text-red-500" />
    },
    {
        id: 2,
        title: 'Car Financing',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <MoneyIcon fontSize="large" className="text-red-500" />
    },
    {
        id: 3,
        title: 'Car Inspection',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <InspectionIcon fontSize="large" className="text-red-500" />
    },
    {
        id: 4,
        title: 'Auto Repairing',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <RepairIcon fontSize="large" className="text-red-500" />
    },
    {
        id: 5,
        title: 'Auto Painting',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <PaintIcon fontSize="large" className="text-red-500" />
    },
    {
        id: 6,
        title: 'Auto Cleaning',
        description: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed',
        icon: <CleanIcon fontSize="large" className="text-red-500" />
    }
];

const OurServices = () => {
    return (
        <div className="container mx-auto pt-10 pb-8">

            <div className="text-center mb-5 pb-8">
                <Button color='error' variant='contained'> Nuestros Servicios </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.id} className="service-item flex flex-col justify-center p-6 mb-4 bg-gray-400 rounded-lg w-full overflow-hidden transition-transform transform hover:scale-105">
                        <div className="flex items-center justify-between mb-3 shadow-lg p-5">
                            <div className="flex items-center justify-center bg-white rounded-full p-4" style={{ width: '80px', height: '80px' }}>
                                {service.icon}
                            </div>
                            <div className="text-6xl text-white mt-n2 m-0">{String(service.id).padStart(2, '0')}</div>
                        </div>
                        <h4 className="mb-3 text-lg text-white">{service.title}</h4>
                        <p className="m-0 text-white">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
