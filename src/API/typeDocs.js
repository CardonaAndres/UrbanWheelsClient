const API = "http://localhost:5010/api/docs";

export const getTypeDocs = async () => {

    try {

        const res = await fetch(`${API}/typeDocs`, { method : 'GET'  });

        if(!res.ok) throw new Error("Lo sentimos, inicia sesión más tarde")

        const data = await res.json();
        return { status : true, data };

    } catch(err) {
        
        return { stattus : false, message : err.message }

    }

}

