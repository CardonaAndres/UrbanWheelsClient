import { HeadsetMic, DirectionsCar, LocationOn } from '@mui/icons-material';
import { Button } from '@mui/material';
import about from "../../assets/img/about.png";

const WelcomeSection = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto pt-10 pb-8">
        <div className="text-4xl text-center mb-10">
          <Button
            color='error'
            className="w-full md:w-1/2 lg:w-1/3 text-lg md:text-2xl"
          >
            Bienvenido a UrbanWheels
          </Button>
        </div>

        <div className="flex justify-center mb-8">
          <div className="max-w-4xl text-center">
            <img className="w-full sm:w-3/4 mx-auto mb-6" src={about} alt="Sobre UrbanWheels" />
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr
              labore labore voluptua no rebum sed, stet voluptua amet sed elitr
              ea dolor dolores no clita. Dolores diam magna clita ea eos amet,
              amet rebum voluptua vero vero sed clita accusam takimata. Nonumy
              labore ipsum sea voluptua sea eos sit justo, no ipsum sanctus
              sanctus no et no ipsum amet, tempor labore est labore no. Eos diam
              eirmod lorem ut eirmod, ipsum diam sadipscing stet dolores elitr
              elitr eirmod dolore. Magna elitr accusam takimata labore, et at
              erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at
              et.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white flex items-center p-6 shadow-lg rounded-lg w-full overflow-hidden transition-transform transform hover:scale-105" style={{ height: '150px' }}>
            <div className="bg-primary-500 flex items-center justify-center mr-6" style={{ width: '80px', height: '80px' }}>
              <HeadsetMic className="text-secondary-500" style={{ fontSize: '2rem' }} />
            </div>
            <h4 className="text-lg">24/7 Car Rental Support</h4>
          </div>

          <div className="bg-secondary-500 text-white flex items-center p-6 shadow-lg rounded-lg w-full overflow-hidden transition-transform transform hover:scale-105" style={{ height: '150px' }}>
            <div className="bg-primary-500 flex items-center justify-center mr-6" style={{ width: '80px', height: '80px' }}>
              <DirectionsCar className="text-secondary-500" style={{ fontSize: '2rem', color: 'black' }} />
            </div>
            <h4 className="text-lg text-black">Car Reservation Anytime</h4>
          </div>

          <div className="bg-white flex items-center p-6 shadow-lg rounded-lg w-full overflow-hidden transition-transform transform hover:scale-105" style={{ height: '150px' }}>
            <div className="bg-primary-500 flex items-center justify-center mr-6" style={{ width: '80px', height: '80px' }}>
              <LocationOn className="text-secondary-500" style={{ fontSize: '2rem' }} />
            </div>
            <h4 className="text-lg">Lots Of Pickup Locations</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
