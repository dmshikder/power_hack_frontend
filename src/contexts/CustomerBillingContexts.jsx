import { createContext, useEffect, useState } from "react";

export const CustomerBillingContext = createContext();

const CustomerBillingContextProvider = (props)=>{
    const [bills, setBills] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/billing-list')
    .then(res=>res.json())
    .then(data=>setBills(data))
  },[])


  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
      console.log('deleting with ', id);
      const url = `http://localhost:5000/delete-billing/${id}`;
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          console.log('deleted');
          const remaining = bills.filter(bill => bill._id !== id);
          setBills(remaining)

        }
      })
    }

  }

    return(
        <CustomerBillingContext.Provider value={{bills,handleDelete}}>
            {props.children}
        </CustomerBillingContext.Provider>

    )
}

export default CustomerBillingContextProvider;
