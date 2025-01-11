import { API_BASE_URL } from '../assets/js/config.js';

export const getTypeDocs = async () => {

    try {

        const res = await fetch(`${API_BASE_URL}/docs/typeDocs`, { method : 'GET'  });

        if(!res.ok) throw new Error("Lo sentimos, inicia sesión más tarde")

        const data = await res.json();
        return { status : true, data };

    } catch(err) {
        
        return { stattus : false, message : err.message }

    }

}

export const getTypeDocByID = async (typeDoc_ID) => {
    try {
        const res = await fetch(`${API_BASE_URL}/docs/typeDoc/${typeDoc_ID}`, { 
            method : 'GET', credentials : 'include' 
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        return { status : true, data };

    } catch (err) {
        return { status : false, message : err.message };
    }
}

export const registerTypeDoc = async (typeDoc) => {
    try {
        const res = await fetch(`${API_BASE_URL}/docs/typeDoc`, {
            method: 'POST', credentials : 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(typeDoc)
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        return { status : true, data };

    } catch (err) {
        return { status : false, message : err.message };
    }
}

export const updateTypeDoc = async (typeDoc) => {
    try {
        const res = await fetch(`${API_BASE_URL}/docs/typeDoc/${typeDoc.type_doc_ID}`, {
            method: 'PUT', credentials : 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(typeDoc)
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        return { status : true, data };

    } catch (err) {
        return { status : false, message : err.message };
    }
}

export const deleteTypeDoc = async (typeDoc_ID) => {
    try {
        const res = await fetch(`${API_BASE_URL}/docs/typeDoc/${typeDoc_ID}`, {
            method: 'DELETE', credentials : 'include'
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        return { status : true, data };

    } catch (err) {
        return { status : false, message : err.message };
    }
}
