import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateBill = ({theBill}) => {

    const id = theBill._id;

    const [fullName,setFullName]= useState(theBill.fullName)
    const [email,setEmail]= useState(theBill.email)
    const [phone,setPhone]= useState(theBill.phone)
    const [paidAmount,setPaidAmount]= useState(theBill.paidAmount)


const handleSubmit =(e) =>{
    e.preventDefault();
    const fullName =e.target.fullName.value;
    const email =e.target.email.value;
    const phone =e.target.phone.value;
    const paidAmount =e.target.paidAmount.value;

    const updatedBill = {fullName,email, phone, paidAmount};

    fetch (`http://localhost:5000/update-billing/${id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedBill)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('success', data)
        alert('Bill updated!!');
        e.target.reset();
    })
}


  return (
   
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
                type='text'
                placeholder='Name'
                name='fullName'
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                required 
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='number'
                placeholder='Phone Number'
                name='phone'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='number'
                placeholder='Payable Amount'
                name='paidAmount'
                value={paidAmount}
                onChange={(e)=>setPaidAmount(e.target.value)}
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Button variant='success' type='submit' block className='mb-2'>Update Bill</Button>
    </Form>

  )
}

export default UpdateBill;