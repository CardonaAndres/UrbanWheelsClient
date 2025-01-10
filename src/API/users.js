const API = "http://localhost:5010/api/users";
// http://localhost:5010/api/users/usersByRol?page=1&rolID=1

export const profile = async () => {

    try {   
        const res = await fetch(`${API}/user`, {
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

        const res = await fetch(`${API}/updatedUser`,  { 
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

        const res = await fetch(`${API}/users?page=${page}`, { method : 'GET', credentials : 'include'  }  );

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

        const res = await fetch(`${API}/getRoles`, { method : 'GET', credentials : 'include'  }  );

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

        const res = await fetch(`${API}/usersByRol?page=${page}&rolID=${rolID}`, {
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
        const res = await fetch(`${API}/getUserByEmail`, 
            { method : 'POST', credentials : 'include', 
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(userEmail) });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message);
        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }
} 

export const deleteUser = async (idUser) => {

    try { 

        const res = await fetch(`${API}/deleteUser/${idUser}`, { 
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
