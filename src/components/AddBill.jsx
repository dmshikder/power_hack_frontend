import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddBill = () => {
  return (
   
    <Form>
        <Form.Group>
            <Form.Control 
                type='text'
                placeholder='Name'
                required 
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='email'
                placeholder='Email'
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='number'
                placeholder='Phone Number'
                required
                className='mb-4'
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control 
                type='number'
                placeholder='Payable Amount '
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