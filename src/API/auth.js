const API = `http://localhost:5010/api/auth`;

export const login = async (user) => {

    try {

        const res = await fetch(`${API}/login`, { method: 'POST',  
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

        const res = await fetch(`${API}/register`, { 
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
        const res = await fetch(`${API}/logout`, {
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

        const res = await fetch(`${API}/verifyToken`, { 
              credentials : 'include', method : 'GET', headers: { 'Content-Type': 'application/json', }
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error en la verificación del token');

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}