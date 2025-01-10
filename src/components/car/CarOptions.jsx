import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import { CarModal } from './CarModal';
import { useCar } from '../../hooks/useCars';

export const CarOptions = ({ totalCars, adminMode = false }) => {
    const { register, handleSubmit } = useForm();
    const [ localModalOpen, setLocalModalOpen ] = useState(false);
    const handleOpenModal = () => setLocalModalOpen(true);
    const handleCloseModal = () => setLocalModalOpen(false);
    const { modalOpen, carData, setModalOpen, searchCarByPlate } = useCar(); 
    const onSubmited = (values) => {
        searchCarByPlate(values.plate);  
    }

    return (
        <div className='bg-gray-100 p-4 mx-auto flex shadow-md flex-col lg:flex-row justify-between items-center'>
            <div className="text-2xl font-bold text-gray-800 my-2 mx-6 flex items-center">
                Nuestros Vehiculos
            </div>

            {adminMode &&           
                <>
                <div className="flex items-center space-x-2">
                    <TextField 
                        {...register('plate', { required: true })} 
                        label="Buscar por placa"
                        variant="standard" 
                        color="error" 
                    />
                    <div className='mt-5'>
                        <Button color="error" variant="contained" onClick={handleSubmit(onSubmited)}>
                            Buscar 
                        </Button>     
                    </div>              
                </div>

                <div className="mt-5">
                    <Button color='error' onClick={handleOpenModal}  variant="contained"> 
                        Registrar Carro 
                    </Button>
                </div>

                {carData && (
                    <CarModal open={modalOpen} onClose={() => setModalOpen(false)} carData={carData} />
                )}

                {!carData && localModalOpen && (
                    <CarModal open={localModalOpen} onClose={handleCloseModal} />
                )}
                
                </>
            }

            <p className="my-2 text-gray-600 text-sm">
                Total de coches: <span className="font-semibold text-red-500 mx-2">{totalCars}</span>
            </p>
        </div>
    );
};
