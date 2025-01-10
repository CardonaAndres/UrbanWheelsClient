import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/auth/LoginPage";
import { Dashboard } from "./pages/common/Dashboard";
import { ProtectedRoute  } from "./components/auth/ProtectedRoute";
import { IsUserAllowed } from "./components/auth/isUserAllowed";
import  { RegisterPage }  from "./pages/auth/RegisterPage";
import { Home } from "./pages/common/Home";
import { Profile } from "./pages/users/common/Profile";
import { UserManagement } from "./pages/users/adminOptions/UserManagement";
import { AuthProvider } from "./context/AuthContext";
import { Cars } from "./pages/cars/Cars";
import { Services } from "./pages/services/Services";
import { routes } from "./assets/js/config.js";
import { CarService } from "./pages/services/CarService.jsx";
import "./assets/css/index.css";

function App() {

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path={routes.home} element={<Home /> } />
            <Route path={routes.login} element={<LoginPage  />} />
            <Route path={routes.register} element={<RegisterPage />} />  

            <Route element={<ProtectedRoute />}>

               <Route path={routes.dashboard} element={<Dashboard /> } /> 
               <Route path={routes.profile} element={<Profile /> } /> 
               <Route path={routes.carService} element={ <CarService />} />

               <Route  element={<IsUserAllowed rolsAccepts={[ 1 ]} />}>
                  {/* Rutas solo para administradores */}
                  <Route path={routes.userManagement} element={ <UserManagement /> } />
                  
               </Route>

               <Route  element={<IsUserAllowed rolsAccepts={[ 1, 2 ]} />}>
                   {/* Rutas para administradores y trabajadores*/}
                   <Route path={routes.cars} element={ <Cars /> } />
                   <Route path={routes.services} element={ <Services /> } />
                   <Route path={routes.carServiceAdminMode} element={ <CarService />} />
                   
               </Route>

            </Route>

                                 
          </Routes>   
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
