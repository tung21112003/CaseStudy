import React ,{ createContext, useEffect, useState } from "react";
import baseAxios, { METHOD_HTTP } from "../baseAxios";

export const InfoContext =createContext();
export const InfoContextProvider = ({children})=>{
    const [user,setUser] =useState(null);
    useEffect(()=>{
          getInfo();
    },[]);
    const getInfo = async ()=>{
       try{
        let data = await baseAxios(METHOD_HTTP.GET,"/users/get-profile") ;
        setUser(data);
       }
       catch(e){
      setUser(null);
       }
   }
    return(
        <InfoContext.Provider value={{user,setUser}}>
            {children}
        </InfoContext.Provider>
    )

}