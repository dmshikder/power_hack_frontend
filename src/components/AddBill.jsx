import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddBill = () => {

    const handleSubmit =(e) =>{
        e.preventDefault();
        const fullName =e.target.fullName.value;
        const email =e.target.email.value;
        const phone =e.target.phone.value;
        const paidAmount =e.target.paidAmount.value;

        if(phone.length !== 11){
            return alert('Please enter 11 digit phone number');
        }

        const newBill = {fullName,email, phone, paidAmount};

        fetch ('http://localhost:5000/add-billing',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newBill)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data)
            alert('New Bill added!!');
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
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Button variant='success' type='submit' block className='mb-2'>Add Bill</Button>
    </Form>

  )
}

export default AddBill;