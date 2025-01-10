const API = 'http://localhost:5010/api/carServices';

export const getAllCarServices = async car_ID => {

    try {

        const res = await fetch(`${API}/car_services/${car_ID}`,{
            method : 'GET', credentials : 'include'
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error al obtener los datos');

        return { status : true, data}

    } catch (err) {
        return { status : false, message : err.message }
    }

} 

export const addCarService = async dataService => {
    try {

        const res = await fetch(`${API}/car_service`,{
            method : 'POST', credentials : 'include', 
            headers : { 'Content-Type': 'application/json'},
            body : JSON.stringify(dataService)
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message || 'Error desconocido')

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }
}

export const updateCarService = async newDataService => {

    try {

        console.log(newDataService);

        const res = await fetch(`${API}/car_service/${newDataService.car_service_ID}`,{
            method : 'PUT', credentials : 'include', 
            headers : { 'Content-Type': 'application/json'},
            body : JSON.stringify(newDataService)
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message || 'Error desconocido')

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const deleteCarService = async carServiceID => {
    try {

        const res = await fetch(`${API}/car_service/${carServiceID}`,{
            method : 'DELETE', credentials : 'include', headers : { 'Content-Type': 'application/json'}
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message || 'Error desconocido')

        return { status : true, message : 'Eliminado Correctamente' }

    } catch (err) {
        return { status : false, message : err.message }
    }
} 