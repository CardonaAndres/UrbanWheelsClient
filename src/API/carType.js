import { API_BASE_URL } from '../assets/js/config.js';

export const getCarTypes = async () => {

    try {
        const res = await fetch(`${API_BASE_URL}/carTypes/getCarTypes`, {
            method : 'GET', credentials : 'include', headers: { 'Content-Type': 'application/json', } 
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}