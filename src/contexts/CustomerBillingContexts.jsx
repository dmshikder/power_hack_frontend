import { createContext, useEffect, useState } from "react";

export const CustomerBillingContext = createContext();

const CustomerBillingContextProvider = (props)=>{
    const [bills, setBills] = useState([]);

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setBills(data))
  },[])
    return(
        <CustomerBillingContext.Provider value={{bills}}>
            {props.children}
        </CustomerBillingContext.Provider>

    )
}

export default CustomerBillingContextProvider;
