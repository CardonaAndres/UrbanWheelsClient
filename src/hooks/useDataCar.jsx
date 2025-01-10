import { getBrands } from '../API/brand.js';
import { getCarTypes } from '../API/carType.js';
import { getStates } from '../API/states.js';

export const useDataCar = async () => {

    try {

        const resBrand = await getBrands(); 
        const resTypeCars = await getCarTypes(); 
        const resStates = await getStates();

        if(!resBrand.status || !resTypeCars.status || !resStates.status)
          throw new Error('Hubo algun error, por favor volver a intentarlo');

        return { status : true, data : {
            brands : resBrand.data,
            states : resStates.data,
            type_cars : resTypeCars.data
        }}

    } catch (err){
        return { status : false, message : err.message }
    }

}
