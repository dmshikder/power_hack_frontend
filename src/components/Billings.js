import React from 'react'
import CustomerBillingContextProvider from '../contexts/CustomerBillingContexts'
import CustomerBillingList from './CustomerBillingList'

const Billings = () => {

  return (
    <div><CustomerBillingContextProvider>
    <CustomerBillingList />
  </CustomerBillingContextProvider></div>
  )
}

export default Billings