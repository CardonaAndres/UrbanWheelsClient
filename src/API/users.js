import { API_BASE_URL } from '../assets/js/config.js';

export const profile = async () => {

    try {   
        const res = await fetch(`${API_BASE_URL}/users/user`, {
           credentials: 'include' 
        });

        if(!res.ok) throw new Error('Lo sentimos, vuelve a intentarlo');
        
        const data = await res.json()
        return { status: true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const updated = async (userData) => {

    try { 

        const res = await fetch(`${API_BASE_URL}/users/updatedUser`,  { 
            method : 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            credentials : 'include', body : JSON.stringify(userData) 
        } );

        if(!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
        }

        const data = await res.json();
        return { status : true, data }

    } catch (err) {

        return { status : false, message : err.message }

    }

}

export const getUsers = async (page) => {

    try { 

        const res = await fetch(
            `${API_BASE_URL}/users/users?page=${page}`, { method : 'GET', credentials : 'include'  }  
        );

        if(!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
        }

        const data = await res.json();
        return { status : true, data };
            

    } catch (err) {
        return { status : false, message : err.message }
    }


}

export const getRoles = async () => {

    try { 

        const res = await fetch(
            `${API_BASE_URL}/users/getRoles`, { method : 'GET', credentials : 'include'  }  
        );

        if(!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
        }

        const data = await res.json();
        return { status : true, data };
            

    } catch (err) {
        return { status : false, message : err.message }
    }


}

export const getUsersByRol = async (page, rolID) => {

    try { 
        const rolesID = [1, 2, 3];
        if(!rolesID.includes(rolID)) throw new Error("Rol no identificado");

        const res = await fetch(`${API_BASE_URL}/users/usersByRol?page=${page}&rolID=${rolID}`, {
            method : 'GET', credentials : 'include'
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        return { status : true, data }

    } catch (err) {
        return { status : false  }
    }

}

export const getUserByEmail = async (userEmail) => {

    try {
        const res = await fetch(`${API_BASE_URL}/users/getUserByEmail`, { 
            method : 'POST', 
            credentials : 'include', 
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(userEmail) 
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message);
        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }
} 

export const deleteUser = async (idUser) => {

    try { 

        const res = await fetch(`${API_BASE_URL}/users/deleteUser/${idUser}`, { 
            method : 'DELETE', 
            headers: { 'Content-Type': 'application/json' },
            credentials : 'include',
        });

        if(!res.ok){
            const data = await res.json();
            throw new Error(data.message);
        }

        const data = await res.json();
        const message = data.message;
        return { status : true, message }
        
    } catch (err) {
        return { status : false, message : err.message }
    }

}
