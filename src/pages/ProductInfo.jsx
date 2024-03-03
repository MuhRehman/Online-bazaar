import React, { useState ,useEffect} from "react";


export default function Login() {



  const [productName, setProductName] = useState("");
  const [menufacturerName, setMenufacturerName] = useState("");
  const [modelName, setModelName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");


  useEffect(() => {
      setTimeout(function(){
          setMsg("");
      }, 15000);
  }, [msg]);



  const handleInputChange = (e, type) => {
    
      switch(type){
       
          case "productname":
            setError("");
              setProductName(e.target.value);
              if(e.target.value === ""){
                
                  setError("Username has left blank!");
              }
              break;
          case "menufacturername":
              setError("");
              setMenufacturerName(e.target.value);
              if(e.target.value === ""){
                  setError("Email has left blank!");
              }
              break;
          case "productmodel":
              setError("");
              setModelName(e.target.value);
              if(e.target.value === ""){
                  setError("Password has left blank!");
              }
              break;
          case "productImg":
              setError("");
              setProductImg(e.target.value);
              if(e.target.value === ""){
                  setError("productImg has left blank!");
              }
              break;
          case "productprice":
              setError("");
              setProductPrice(e.target.value);
              if(e.target.value === ""){
                  setError("Confirm password has left blank!");
              }
              
              break;
          default:
      }
  }



  function handleProductSubmit(){


       
        
  

    if(productName !== "" && menufacturerName !== "" && modelName !== "" && productPrice !== "" ){
        
        var url = "http://localhost/backend/addproductinfo.php";
 
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        var Data = {

          productName: productName,
          menufacturerName: menufacturerName,
          modelName: modelName,
          productPrice: productPrice,
          productImg: productImg

        }
      

        
        // alert(Data.productName);

     console.log(Data.productName);
   
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


        
        setProductName("");
        setMenufacturerName("");
        setModelName("");
        setProductPrice("");
        setProductImg("");

      

    }
    else{
        setError("All fields are required!");
    }
}


  return (


    <>
      <section className="vh-100 bg-image" >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Enter  Product Information</h2>
                      <p>
                          {/* {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          } */}
                      </p>
                    
                      
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Name</label>
                          <input 
                                type="text"
                                name="productname"
                                className="form-control form-control-lg"
                                value={productName}
                                onChange={(e) => handleInputChange(e, "productname")}
                              //  onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Menufacturer's Name </label>
                          <input 
                                type="text"
                                name="menufacturername"
                                className="form-control form-control-lg"
                                value={menufacturerName}
                                onChange={(e) => handleInputChange(e, "menufacturername")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Model </label>
                          <input 
                                type="text"
                                name="productmodel"
                                className="form-control form-control-lg"
                                value={modelName}
                                onChange={(e) => handleInputChange(e, "productmodel")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Price</label>
                          <input 
                                type="text"
                                name="productprice"
                                className="form-control form-control-lg"
                                value={productPrice}
                                onChange={(e) => handleInputChange(e, "productprice")}
                               // onBlur={checkEmail}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Img 11</label>
                          <input 
                                type="text"
                                name="productimg"
                                className="form-control form-control-lg"
                                value={productImg}  
                                onChange={(e) => handleInputChange(e, "productimg")}
                               // onBlur={checkEmail}
                            />
                        </div>
                    
                        <div className="d-flex justify-content-center">
                          <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-primary text-white btn-block btn-lg gradient-custom-4 text-body"
                                onClick={handleProductSubmit}
                            />
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
