import { Route, Routes } from "react-router-dom";
import "./App.css";
import Billings from "./components/Billings";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path='/billings' element={<Billings/>}></Route>
        
        {/* <h1 className="text-primary">Bangladesh</h1> */}
        {/* <CustomerBillingContextProvider>
          <CustomerBillingList />
        </CustomerBillingContextProvider> */}
        </Routes>
      
    </div>
  );
}

export default App;
