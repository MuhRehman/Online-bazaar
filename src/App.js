import Registration from "./components/Registration.jsx";
import './App.css';
import Login from "./components/Login.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import Searchproduct from "./pages/Searchproduct.jsx";
import Contacting from "./components/Contacting.jsx";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <div >

<nav class="" data-bs-theme="white">

    <Router>
 
      <ul className="Navbar-link bg-primary d-flex">
         
         <li>
           <Link to="/registration" className="fw-bolder" >Registration</Link>
         </li>
         <li>
           <Link to="/login" className="fw-bolder">Login</Link>
         </li>
         <li>
           <Link to="/productinfo" className="fw-bolder">Add Product Info</Link>
         </li>
         <li>
           <Link to="/searchproduct" className="fw-bolder">Search Product</Link>
         </li>
         <li>
           <Link to="/contacts" className="fw-bolder">Contacting</Link>
         </li>
         <li>
           <Link to="/productdetail" className="fw-bolder">Product Detail</Link>
         </li>
         <li>
           <Link to="/home" className="fw-bolder">Home</Link>
         </li>
       </ul>
      <Routes>
      <Route path='/registration' element={        <Registration/>} />
      <Route path='/login' element={ <Login />} />
      <Route path='/productinfo' element={ <ProductInfo />} />
      <Route path='/searchproduct' element={ <Searchproduct />} />
      <Route path='/contacts' element={ <Contacting />} />
      <Route path='/productdetail' element={ <ProductDetail />} />
      <Route path='/home' element={ <Home />} />
    
      </Routes>
      </Router>





    </nav>
    </div>
  );
}

export default App;
