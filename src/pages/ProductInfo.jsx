import React, { useState ,useEffect , useRef} from "react";

//For Image Upload
// import ImageUploading from "react-images-uploading";
import axios from 'axios';

export default function Login() {



  const [productName, setProductName] = useState("");
  const [menufacturerName, setMenufacturerName] = useState("");
  const [modelName, setModelName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImgs, setProductImg] = useState("");
  const [productimage, setProductimage] = useState("");
  const [productfilepath, setProductfileimage] = useState("");
  const [error, setError] = useState("Test");
  const [msg, setMsg] = useState("Test");


  useEffect(() => {
      setTimeout(function(){
          setMsg("");
      }, 15000);
  }, [msg]);

// -----------------------testing------------
  const [selectedFile, setSelectedFile] = useState(null);

	const [imageLink, setImageLink] = useState(null);

	const [validationError, setValidationError] = useState(null);

	const fileInputRef = useRef(null);

	const handleFileChange = (event) => {

		const file = event.target.files[0];
		if(file)
		{
			const allowedExtension = ['.jpg', '.png'];
			const selectedFileExtension = file.name.split('.').pop().toLowerCase();
			if(allowedExtension.includes('.' + selectedFileExtension))
			{
				setSelectedFile(file);
				setValidationError(null);
			}
			else
			{
				setSelectedFile(null);
				setValidationError('Invalid file extension. Please select a file with .jpg or .png extension.');
				fileInputRef.current.value = '';
			}
		}

	};

	const handleUpload = async(e) => {
		if(selectedFile)
		{
    
      e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
 
    try {
      const response = await fetch('http://localhost/backend/fileupload.php', {
        method: 'POST',
        body: formData,
      });
 
      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }

        alert("Move to Upload Dir....!");

        // fetch('http://localhost/backend/addproductinfo.php', {
        //     method: "POST",
        //     body: formData,
        // })
        // .then((response) => response.json())
        // .then((response) => {
        //     alert(" Successfully Upload");
            
        //     // debugger

        //     console.log(response[0].result);
        //     setMsg(response[0].result);
        //     }).catch((err) =>{
        //       alert("Failed Upload.. ");
        //     //   debugger
        //         setError(err);
        //         console.log(err);
        //     });




		}
		else
		{
			setValidationError('Please select a file before uploading.');
		}
	};
// -----------------------testing------------
//  alert()
  const [file, setFile] = React.useState(null)
    
    const fileHandler = (e) => {
        setFile(e.target.files[0])
        
    }

  const  onChangess = (imageList) => {
      // data for submit
      
      // Create an object of formData 
      const formData = new FormData(); 
      
      // Update the formData object 
      formData.append( 
        "myFile", 
        imageList[0].file, 
        imageList[0].file.name
      ); 
     
      // Details of the uploaded file 
      console.log(imageList[0].file); 
     
      // Request made to the backend api 
      // Send formData object to my php file for save in folder
      axios.post("http://localhost/backend/reactimageupload.php", formData); 
    }; 
  const handleInputChange = (e, type) => {
    // console.log(`Selected file - ${e.target.files[0].name}`);
  
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
          case "productimage":
              setError("");
              setProductfileimage(e.target.files[0].name);
              setProductimage(e.target.value);
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


       
        
  

    if(productName !== "" && menufacturerName !== "" && modelName !== "" && productPrice !== ""  ){
        
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
          // productImg: productimage
          productImg: productfilepath

        }
      

        
        // alert(Data.productName);

     console.log(Data.productName);
   
  
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        })
        // .then((response) => response.json())
        .then((response) => {
            alert("post 111");
            
            // debugger

            console.log(response[0].result);
            setMsg(response[0].result);
        }).catch((err) =>{
          alert("not 11");
            
        //   debugger

            setError(err);
            console.log(err);
        });


        
        setProductName("");
        setMenufacturerName("");
        setModelName("");
        setProductPrice("");
        setProductimage("");

      

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
                      <h2 className="text-uppercase text-center mb-5">Enter  Product Information 11 </h2>
                      <p>
                          {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          }
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
                            <label className="form-label">Product Image </label>
                          {/* <input 
                                type="file"
                                name="productimage"
                                className="form-control form-control-lg"
                                value={productimage}  
                                onChange={(e) => handleInputChange(e, "productimage")}
                               // onBlur={checkEmail}
                            /> */}
                            	{/* <input type="file"
                                 name="productimage"
                              className="form-control form-control-lg"
                              ref={fileInputRef} onChange={handleFileChange} /> */}
                        </div>
                        <div className="form-outline mb-4">
                            {/* <label className="form-label">Product Img 11</label> */}
                          <input 
                                type="file"
                                name="productimage"
                                className="form-control form-control-lg"
                                ref={fileInputRef}
                                value={productimage}  
                                onChange={(e) => handleInputChange(e, "productimage")}
                              //  onBlur={checkEmail}
                            /> 
                        </div>
                      <div>
                      {/* <div>
                          <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
                          <input type="file" onChange={fileHandler} />
                      </div> */}
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
          <div className="container">
            <h1 className="mt-5 mb-5 text-center"><b>Upload File in React.js</b></h1>

            <div className="card">
             
                <div className="card-body">
                    <div className="row">
                        <div className="col col-2"><b>Select File</b></div>
                        <div className="col col-3">
                        	<input type="file" ref={fileInputRef} onChange={handleFileChange} />
                        </div>
                        <div className="col col-3">
                        	<button className="btn btn-primary" onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-2">&nbsp;</div>
                        <div className="col col-3">
                            {validationError && (
                            	<p className="text-danger">{validationError}</p>
                            )}

                            {imageLink && (
                            	<div>
                                    <p><b>Uploaded Image : </b></p>
                                    <img src={imageLink} className="img-fluid img-thumbnail" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        </section>
    </>
  )
}
