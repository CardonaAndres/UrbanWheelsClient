import React from 'react';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import { Twitter, Facebook, LinkedIn, Instagram, ArrowRight } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sección Acerca de */}
          <div className="about">
            <div className="text-red-600 text-2xl font-bold mb-4">Acerca de nosotros</div>
            <p className="text-gray-700 mb-2">
              Somos una empresa dedicada a ofrecer los mejores servicios en el sector de la movilidad. 
            </p>
            <p className="text-gray-700">
              Contáctanos para más información.
            </p>
          </div>
          
          {/* Sección Enlaces Rápidos */}
          <div className="quick-links">
            <div className="text-red-600 text-2xl font-bold mb-4">Enlaces rápidos</div>

            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> Private Policy
              </a>
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> Terms & Conditions
              </a>
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> New Member Registration
              </a>
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> Affiliate Program
              </a>
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> Return & Refund
              </a>
              <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
                <ArrowRight className="mr-2 text-red-600" /> Help & FAQs
              </a>
            </div>

          </div>
          
          {/* Sección de Contacto */}
          <div className="contact">
            <div className="text-red-600 text-2xl font-bold mb-4">Contacto</div>
            <p className="text-gray-700 flex items-center mb-4">
              <LocationOn className="mr-2 text-red-600" /> 123 Calle Principal, Ciudad
            </p>
            <p className="text-gray-700 flex items-center mb-4">
              <Phone className="mr-2 text-red-600" /> (123) 456-7890
            </p>
            <p className="text-gray-700 flex items-center mb-4">
              <Email className="mr-2 text-red-600" /> info@ejemplo.com
            </p>
            <div className="social-icons flex space-x-4 mt-4 pt-4">
              <a href="#" className="text-red-600 hover:text-red-300 transition">
                <Twitter />
              </a>
              <a href="#" className="text-red-600 hover:text-red-300 transition">
                <Facebook />
              </a>
              <a href="#" className="text-red-600 hover:text-red-300 transition">
                <LinkedIn />
              </a>
              <a href="#" className="text-red-600 hover:text-red-300 transition">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-200 py-4">
        <p className="text-center text-gray-600 text-sm">
          &copy; <a href="#" className="text-red-600">UrbanWheels</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
