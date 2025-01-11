import { useEffect, useState } from "react";
import { registerTypeDoc, updateTypeDoc, deleteTypeDoc, getTypeDocByID } from "../API/typeDocs.js";

export const useTypeDocs = () => {
  const [ loading, setLoading ] = useState(false);

  const registerTypeDocFunc = async (typeDoc) => {
    try { 

      setLoading(true);
      const res = await registerTypeDoc(typeDoc);
      if (!res.status) throw new Error(res.message);  
      return { status : true, res }

    } catch (err) {
      return { status : false, message : err.message}; 
    } finally {
      setLoading(false);
    }
  } 

  const updateTypeDocFunc = async (typeDoc) => {
    try {

      setLoading(true);
      const res = await updateTypeDoc(typeDoc);
      if (!res.status) throw new Error(res.message);
      return { status : true, res }

    } catch (err) {
      return { status : false, message : err.message};
    } finally {
      setLoading(false);
    }
  }

  const deleteTypeDocFunc = async (typeDoc_ID) => {
    try {

      setLoading(true);
      const res = await deleteTypeDoc(typeDoc_ID);
      if (!res.status) throw new Error(res.message);
      return { status : true, res }

    } catch (err) {
      return { status : false, message : err.message};
    } finally {
      setLoading(false);
    }
  }


  return {
    registerTypeDocFunc,
    updateTypeDocFunc,
    deleteTypeDocFunc,
    loading,
  }
}
