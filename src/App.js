import Registration from "./components/Registration.jsx";
import './App.css';
import Login from "./components/Login.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >

<nav class="" data-bs-theme="dark">

    <Router>
 
      <ul className="Navbar-link bg-primary d-flex">
         
         <li>
           <Link to="/registration" className="fw-bolder" >Registration</Link>
         </li>
         <li>
           <Link to="/login" className="fw-bolder">Login</Link>
         </li>
         <li>
           <Link to="/productinfo" className="fw-bolder">Product Info</Link>
         </li>
       </ul>
      <Routes>
      <Route path='/registration' element={        <Registration/>} />
      <Route path='/login' element={ <Login />} />
      <Route path='/productinfo' element={ <ProductInfo />} />
    
      </Routes>
      </Router>
    </nav>
    </div>
  );
}

export default App;
