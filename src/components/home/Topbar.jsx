import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Topbar = () => {
  return (
    <>
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row">
          {/* Columna de información */}
          <div className="lg:w-7 px-0 lg:px-5 text-left flex-grow mb-4 lg:mb-0">
              <div className="flex items-center py-3">
                  <LocationOnIcon className="text-red-500 mr-2" />
                  <small>123 Street, New York, USA</small>

                  <div className="flex items-center ml-10">
                      <AccessTimeIcon className="text-red-500 mr-2" />
                      <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                  </div>

              </div>

          </div>
          
          {/* Columna de teléfono y redes sociales */}
          <div className="flex items-center justify-between lg:justify-end flex-grow">
              <div className="flex items-center py-3 mr-10">
                  <PhoneInTalkIcon className="text-red-500 mr-2" />
                  <small>+57 301 252 4648</small>
              </div>

              <div className="flex items-center">
                  <a className="bg-white text-red-500 p-2 rounded-full mr-1" href="">
                      <FacebookIcon />
                  </a>
                  <a className="bg-white text-red-500 p-2 rounded-full mr-1" href="">
                      <TwitterIcon />
                  </a>
                  <a className="bg-white text-red-500 p-2 rounded-full mr-1" href="">
                      <LinkedInIcon />
                  </a>
                  <a className="bg-white text-red-500 p-2 rounded-full" href="">
                      <InstagramIcon />
                  </a>
              </div>
          </div>
      </div>
    </div>


  </>
  )
}
