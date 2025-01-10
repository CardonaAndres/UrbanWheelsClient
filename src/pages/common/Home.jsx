import BannerComponent from '../../components/home/BannerComponent.jsx';
import Footer from '../../components/home/Footer.jsx';
import OurServices from '../../components/home/OurServices.jsx';
import { RentCar } from '../../components/home/RentCar.jsx';
import Team from '../../components/home/Team.jsx';
import { Topbar } from '../../components/home/Topbar.jsx';
import WelcomeSection from '../../components/home/WelcomeSection.jsx';
import NavbarHome from '../../components/home/NavbarHome.jsx';


export const Home = () => {

  return (
    <>
      <Topbar/>
      <NavbarHome />
      <WelcomeSection />
      <OurServices />
      <RentCar />
      <Team />
      <BannerComponent />
      <Footer />      
    </>
  );
};



