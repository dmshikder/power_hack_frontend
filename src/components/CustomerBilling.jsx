import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { CustomerBillingContext } from "../contexts/CustomerBillingContexts";
import UpdateBill from "./UpdateBill";


const Customerbilling = ({bill}) => {

  const {handleDelete} = useContext(CustomerBillingContext);


  const [show,setShow] = useState(false)

 const handleShow = ()=> setShow(true);
 const handleClose = () => setShow(false);


  
  return (
    <>
      <td>{bill._id}</td>
      <td>{bill.fullName}</td>
      <td>{bill.email}</td>
      <td>{bill.phone}</td>
      <td>{bill.paidAmount}</td>
      <td>
        <i onClick={handleShow} className="fa-solid fa-pencil text-secondary me-4"></i>
        <i onClick={()=>handleDelete(bill._id)} className="fa-solid fa-trash text-danger"></i>
      </td>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBill theBill={bill}/>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export default Customerbilling;
