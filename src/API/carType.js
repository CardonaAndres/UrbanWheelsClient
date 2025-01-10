const API = 'http://localhost:5010/api/carTypes'

export const getCarTypes = async () => {

    try {

        const res = await fetch(`${API}/getCarTypes`, {
            method : 'GET', credentials : 'include', headers: { 'Content-Type': 'application/json', } 
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        return { status : true, data }

    } catch (err) {
        return { status : false, message : err.message }
    }

}