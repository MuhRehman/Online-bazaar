import Registration from "./components/Registration.jsx";
import './App.css';
import Login from "./components/Login.jsx";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
 
 {/* <Router>
      <div>
        <ul>
         
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Routes>
          <Route exact path="/">
            <Registration/>
          </Route>
          <Route path="/about">
            <Login />
          </Route>
         
          </Routes>
      </div>
    </Router> */} 
    <Router>
      {/* <Link to='/registration'>Sign Up </Link>
      <Link to='/login'>Login</Link> */}
      <ul>
         
         <li>
           <Link to="/registration">Registration</Link>
         </li>
         <li>
           <Link to="/login">Login</Link>
         </li>
       </ul>
      <Routes>
      <Route path='/registration' element={        <Registration/>} />
      <Route path='/login' element={ <Login />} />
    
      </Routes>
      </Router>
    </div>
  );
}

export default App;
