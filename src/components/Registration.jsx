
import React, { useState ,useEffect} from "react";

 
const Registration = () => {
    
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");


    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 15000);
    }, [msg]);
 
    const handleInputChange = (e, type) => {
      
        switch(type){
         
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                  
                    setError("Username has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value === ""){
                    setError("Confirm password has left blank!");
                }
                else if(e.target.value !== pass1){
                    setError("Confirm password does not match!")
                }
                break;
            default:
        }
    }
 
    function handleSubmit(){


       
        
  

        if(user !== "" && email !== "" && pass1 !== "" && pass2 !== ""){
            
            // var url = "http://localhost/devtest/reactjs/registration.php";
            var url = "http://localhost/backend/registration.php";
            // var url = "https://api.example.com/items";
     
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                user: user,
                email: email,
                pass: pass2
            }
          
       alert("Sss");

            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            })
            .then((response) => response.json())
            .then((response) => {
                alert("post");
                
                // debugger

                console.log(response[0].result);
                setMsg(response[0].result);
            }).catch((err) =>{
              alert("not");
                
            //   debugger

                setError(err);
                console.log(err);
            });


            // fetch(url, {
            //     method: "POST",
            //     headers: headers,
            //     body: JSON.stringify(Data)
            //  })
            // .then((res) => res.json())
            // .then((data) => {
            //   // console.log( JSON.stringify(data, null, 2));
            //   alert(" yes enter ");
            //   alert(data);
            //   console.log(data[0].result);
            // })
            // .catch((error) => console.log(error));

      //       fetch(url,{
      //             method: "POST",
      //             headers: headers,
      //             // body: JSON.stringify(Data)
      //           })
      // .then(response => response.json() )
      // .then(json =>  {
      //   console.log(json)
      //   setMsg(json.title)
      // }
    
      // );
            
            setUser("");
            setEmail("");
            setPass1("");
            setPass2("");

          

        }
        else{
            setError("All fields are required!");
        }
    }
 
    function checkUser(){
        alert("Dddd");
        var url = "http://localhost/backend/checkuser.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            user: user
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
 
    function checkEmail(){
        var url = "http://localhost/backend/checkemail.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
 
    // function checkPassword(){
    //     if(pass1.length < 8){
    //         setError("Password is less than 8 characters!")
    //     }
    // }


  
    return (
    
        <>
        <section className="vh-100 bg-image" 
        // style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65")'}}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <p>
                          {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          }
                      </p>
                        <div className="form-outline mb-4">
                        <label className="form-label">Your User Name</label>
                        <h1>{user}</h1>
                          <input 
                              type="text"
                              name="user"
                              className="form-control form-control-lg"
                              value={user}
                              onChange={(e) => handleInputChange(e, "user")}
                            //   onBlur={checkUser}
                          />
                          
                        </div>
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
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label">Repeat your password</label>
                          <input 
                                type="password"
                                name="pass2"
                                className="form-control form-control-lg"
                                value={pass2}
                                onChange={(e) => handleInputChange(e, "pass2")}
                            />
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          {/* <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                onClick={handleSubmit}
                            /> */}
                            <button type="button"  onClick={handleSubmit} class="btn btn-primary">Submit</button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                        <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
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


export default Registration;