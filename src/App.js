import './App.css';
import CustomerBillingList from './components/CustomerBillingList';
import CustomerBillingContextProvider from './contexts/CustomerBillingContexts';

function App() {
  return (
    <div className="App">
    <h1 className='text-primary'>Bangladesh</h1>
    <CustomerBillingContextProvider>
    <CustomerBillingList/>
    </CustomerBillingContextProvider>
      
    </div>
  );
}

export default App;
