import { API_BASE_URL } from '../assets/js/config.js';

export const createCar = async carData => {

    try {

        if(!carData.image_url[0]) throw new Error('Por favor, escoger la imagen');

        const formData = new FormData();

            formData.append('image_url', carData.image_url[0]);
            formData.append('model', carData.model);
            formData.append('year', carData.year);
            formData.append('plate', carData.plate);
            formData.append('kilometre', carData.kilometre);
            formData.append('color', carData.color);
            formData.append('acquisition_date', carData.acquisition_date);
            formData.append('brand_ID', carData.brand_ID);
            formData.append('car_type_ID', carData.car_type_ID);
            formData.append('status_ID', carData.status_ID);

        const res = await fetch(`${API_BASE_URL}/cars/car`,{
            method : 'POST', 
            credentials : 'include', 
            body : formData
        });

        const data = await res.json();
        
        if(!res.ok) throw new Error(data.message);

        return { status : true, data }
        

    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const updatedCar = async carData => {
    try {

        if(!carData.image_url[0]) throw new Error('Por favor, escoger la imagen');

        const formData = new FormData();

            formData.append('image_url', carData.image_url[0]);
            formData.append('model', carData.model);
            formData.append('year', carData.year);
            formData.append('plate', carData.plate);
            formData.append('kilometre', carData.kilometre);
            formData.append('color', carData.color);
            formData.append('acquisition_date', carData.acquisition_date);
            formData.append('brand_ID', carData.brand_ID);
            formData.append('car_type_ID', carData.car_type_ID);
            formData.append('status_ID', carData.status_ID);

        const res = await fetch(`${API_BASE_URL}/cars/car/${carData.car_ID}`,{
            method : 'PUT', credentials : 'include', body : formData
        });

        const data = await res.json();
        
        if(!res.ok) throw new Error(data.message);
        
        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }
}

export const getCar = async idCar => {

}

export const getCarByPlate = async plate => {
    try {
        const res = await fetch(`${API_BASE_URL}/cars/carByPlate/${plate}`,{
            method : 'GET', credentials : 'include'
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        return { status : true, data }

    } catch (err){
        return { status : false, message : err.message }
    }
}

export const getAllCars = async page => {

    try {

        const res = await fetch(`${API_BASE_URL}/cars/cars?pages=${page}`,{
            method : 'GET', credentials : 'include', headers: { 'Content-Type': 'application/json'}
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error desconocido');

        return { status : true, data }


    } catch (err) {
        return { status : false, message : err.message }
    }

}

export const deleteCar = async idCar => {

    try {

        const res = await fetch(`${API_BASE_URL}/cars/car/${idCar}`, {
            method : 'DELETE', credentials : 'include', headers: { 'Content-Type': 'application/json'}
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message || 'Error al eliminar');

        return { status : true, message : data.message }

    } catch (err) {
        return { status : false, message : err.message }
    }

}