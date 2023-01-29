import React from "react";


const CustomerBilling = ({bill}) => {
  return (
    <>
      <td>{bill.id}</td>
      <td>{bill.fullName}</td>
      <td>{bill.email}</td>
      <td>{bill.phone}</td>
      <td>{bill.paidAmount}</td>
      <td>
        <i className="fa-solid fa-pencil text-secondary me-4"></i>
        <i className="fa-solid fa-trash text-danger"></i>
      </td>
      
    </>
  );
};

export default CustomerBilling;
