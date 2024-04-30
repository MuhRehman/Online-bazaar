import React , { useState } from 'react'


import { useNavigate } from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    // let history = useHistory();
    
    const handleInputChange = (e, type) => {
      
        switch(type){
         
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                  
                    setError("Username has left blank!");
                }
                break;
        
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank!");
                }
                break;
            
            default:
        }
    }
    function handleLoginSubmit(){
                   
        if( email !== "" && pass1 !== ""){
            var url = "http://localhost/backend/checkuser.php";
            
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            
            var Data = {
                
                email: email,
                pass: pass1
            };


            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
             })
            .then((res) => res.json())
            .then((res) => {
              // console.log( JSON.stringify(data, null, 2));
              alert("post");
                //  console.log(data);
                   console.log('Testing ',res[0]);
                   console.log('res ',res[0].result[2]);
                   console.log('res  role ',res[0].result[3]);
                   localStorage.setItem('items', JSON.stringify(res[0].result[1]));
                   localStorage.setItem('roles', JSON.stringify(res[0].result[3]));

                   let Username =  localStorage.getItem("items");
                   let roleid =  localStorage.getItem("roles");
                               
                   console.log("local storage ", roleid);
                    
                   //  if (res[0].result == "login") {
                 if (res[0].result[2] == email ) {
                 setMsg(res[0].result);
                 alert("Yes, Login Succeccfully.!")
                 navigate("/home");
                 } else {
                     setError(res[0].result);
                 }

              // console.log(data[0].result);
            })
            .catch((error) => {
              setError(error);
              console.log(error)
            });

        }
        
        // echo "Connected Not insert!";exit;
        //     $sqlquery = "INSERT INTO users(name, email, password) VALUES('$user', '$email', '$pass');";
        //     if ($mysqli->query($sqlquery) === TRUE) {
        //         echo "New record created successfully";
        //       } else {
        //         echo "Error: " . $sqlquery . "<br>" . $mysqli->error;
        //       }
        // }
        // else{
        //     $result = "";
        // }

    }
    return (

    <>
        <section className="vh-100 bg-image"
         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65")'}}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Login</h2>
                      <p>
                          {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          }
                      </p>
                    
                        <div className="form-outline mb-4">
                            <label className="form-label">Your Email</label>
                          <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={(e) => handleInputChange(e, "email")}
                    
                                // onBlur={checkEmail}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Password</label>
                          <input 
                                type="password"
                                name="pass1"
                                className="form-control form-control-lg"
                                value={pass1}
                                onChange={(e) => handleInputChange(e, "pass1")}
                                // value={pass1}
                                 // onChange={(e) => handleInputChange(e, "pass1")}
                               // onBlur={checkPassword} *
                            />
                        </div>
                    
                        <div className="d-flex justify-content-center">
                          {/* <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                // onClick={handleSubmit}
                            /> */}
                            <button type="button" onClick={handleLoginSubmit}  class="btn btn-primary pr-4">Submit</button>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
