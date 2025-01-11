import { API_BASE_URL } from '../assets/js/config.js';

export const login = async (user) => {

    try {

        const res = await fetch(`${API_BASE_URL}/auth/login`, { method: 'POST',  
            headers: { 'Content-Type': 'application/json', },  
            body: JSON.stringify(user), credentials: 'include'
        });

        const data = await res.json(); 

        if(!res.ok) throw new Error(data.message);
        
        return { success: true, data };

    } catch (err) {

        return { success: false, message: err.message || 'Error inesperado' };


    }

}

export const register = async (user) => {

    try {

        const res = await fetch(`${API_BASE_URL}/auth/register`, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(user)
        })

        const data = await res.json();

        if (!res.ok) return {success : false, message : data.message }
        
        return { success: true, data }; 

    } catch (err) {

        return { success: false, message: err.message || 'Error inesperado' };
        
    }

}

export const logout = async () => {

    try {
        const res = await fetch(`${API_BASE_URL}/auth/logout`, {
            method : 'POST', credentials : 'include',
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message);


        return { status : true, data}
        
    } catch (err) {
        return { status : false, message : err.message }
    }
}

export const verifyToken = async () => {

    try {

        const res = await fetch(`${API_BASE_URL}/auth/verifyToken`, { 
              credentials : 'include', method : 'GET', headers: { 'Content-Type': 'application/json', }
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error en la verificación del token');

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}