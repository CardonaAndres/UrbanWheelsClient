const API = 'http://localhost:5010/api/services'

export const getServices = async () => {

    try {

        const res = await fetch(`${API}/services`,{
            method : 'GET', credentials : 'include'
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error al obtener los servicios');

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const deleteService = async serviceID => {

    try {

        const res = await fetch(`${API}/service/${serviceID}`,{
            method : 'DELETE', credentials : 'include', headers: { 'Content-Type': 'application/json', }
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error al eliminar');

        return { status : true, message : data.message }

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const createService = async serviceData => {

    try {

        const res = await fetch(`${API}/service`,{ 
            method : 'POST', headers: { 'Content-Type': 'application/json', }, 
            credentials : 'include', body : JSON.stringify(serviceData)
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error crear');

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const updateService = async serviceData => {

    try {

        const res = await fetch(`${API}/service/${serviceData.service_ID}`,{
            method : 'PUT', headers: { 'Content-Type': 'application/json', }, 
            credentials : 'include', body : JSON.stringify(serviceData)
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error al actualizar');

        return { status : true, message : data.message }

    } catch (err) {
        return { status : false, message : err.message }
    }

}