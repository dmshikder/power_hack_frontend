import React, { useContext } from "react";
import { CustomerBillingContext } from "../contexts/CustomerBillingContexts";


const Customerbilling = ({bill}) => {

  const {handleDelete} = useContext(CustomerBillingContext)
  return (
    <>
      <td>{bill._id}</td>
      <td>{bill.fullName}</td>
      <td>{bill.email}</td>
      <td>{bill.phone}</td>
      <td>{bill.paidAmount}</td>
      <td>
        <i className="fa-solid fa-pencil text-secondary me-4"></i>
        <i onClick={()=>handleDelete(bill._id)} className="fa-solid fa-trash text-danger"></i>
      </td>
      
    </>
  );
};

export default Customerbilling;
