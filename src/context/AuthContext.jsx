import { createContext, useState, useContext, useEffect} from "react";
import { errorAlert, successAlert } from "../components/common/Alerts";
import { login, register, logout as logoutRequest, verifyToken } from "../API/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {

    const context = useContext(AuthContext);

    if(!context) throw new Error("useAuth must be used");
    
    return context;

}

export const AuthProvider = ({ children }) => {

    const [ isAuth, setIsAuth ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ user, setUser ] = useState({  })

    const signin = async (userData) => {

        try {
            setLoading(true);
            const res = await login(userData);

            if(!res.success){
                const message = res.message?.message || res.message || 'Error desconocido';
                throw new Error(message);
            }
            setUser(res.data.user);
            await successAlert(res.data.message);
            setIsAuth(true)

        } catch (err) {
            errorAlert(err.message);  
        } finally {
            setLoading(false);
        }

       
    }

    const signup = async (userData) => {

        try {
            setLoading(true);

            const {name, email, type_doc_ID, number_doc, age, 
                cellphone, address, password, confirmPassword} = userData;
            
            if(password !== confirmPassword) throw new Error("Por favor, verificar las contraseñas")

            const res = await register({ name, email, type_doc_ID, number_doc, age, 
                    cellphone, address, password, confirmPassword });

            if(!res.success) throw new Error(res.message?.message || res.message || 'Error desconocido');
       
            await successAlert(res.message);

            return true;
                
        } catch (err) {
            errorAlert(err.message);
        } finally {     
            setLoading(false);
        }

    }

    const logoutFunction = async () => {
           
        try { 

            const res = await logoutRequest();
        
            if(!res.status) throw new Error(res.message);

            await successAlert('Has cerrado sesión correctamente.');
            setIsAuth(false); setUser({});
            window.location.reload();

        } catch (err) {
            errorAlert("Hubo algun error, por favor vuelve a intentarlo");      
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const verify = async () => {

            try {

                setLoading(true);
                const token = Cookies.get('token');
                if(!token) return setIsAuth(false);  
    
                const res = await verifyToken();
                if(!res.status) throw new Error(res.message);  
                setUser(res.data); setIsAuth(true);
                             
            } catch (err) {
                setIsAuth(false);
                logoutFunction();
                console.log(err.message);
            } finally {
                setLoading(false);
            }
    
        }

        verify()

    }, []);


    return (
        <AuthContext.Provider value = {{     
                signup,
                signin,
                logoutFunction,
                isAuth,
                loading, 
                setLoading,
                user,
         }} >  { children } </AuthContext.Provider>   
    )

}

