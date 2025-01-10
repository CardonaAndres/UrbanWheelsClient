import React from 'react';
import bannerLeft from "../../assets/img/banner-left.png";
import bannerRight from "../../assets/img/banner-right.png";
import { Button } from '@mui/material';

const BannerComponent = () => {
    return (
        <div className='bg-gray-100'>
            <div className="container  mx-auto pt-10 pb-8">
            <div className="flex flex-wrap -mx-2">
                {/* Columna izquierda */}
                <div className="w-full lg:w-1/2 px-2 ">
                    <div className="flex items-center justify-between bg-gray-600 px-5" style={{ height: '350px' }}>
                        <img className="flex-shrink-0 w-1/2 mr-4" src={bannerLeft} alt="Banner Left" />
                        <div className="text-right text-white">
                            <h3 className="text-xl font-bold uppercase mb-3">¿Quieres conducir?</h3>
                            <p className="text-lg mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <Button variant="contained" color="error"  href="/login">
                                Vamos
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Columna derecha */}
                <div className="w-full lg:w-1/2 px-2">
                    <div className="flex items-center justify-between bg-gray-800 px-5" style={{ height: '350px' }}>
                        <div className="text-left text-white">
                            <h3 className="text-xl font-bold uppercase mb-3">¿Buscando un carro?</h3>
                            <p className="text-lg mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <Button variant="contained" color="error"  href="/login">
                                Vamos
                            </Button>
                        </div>
                        <img className="flex-shrink-0 w-1/2 ml-4" src={bannerRight} alt="Banner Right" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BannerComponent;
