import React from 'react'

export default function Login() {
  return (


    <>
        <section className="vh-100 bg-image" >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <p>
                          {/* {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          } */}
                      </p>
                    
                        <div className="form-outline mb-4">
                            <label className="form-label">Your Email</label>
                          <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                // value={email}
                                // onChange={(e) => handleInputChange(e, "email")}
                               // onBlur={checkEmail}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Password</label>
                          <input 
                                type="password"
                                name="pass1"
                                className="form-control form-control-lg"
                                // value={pass1}
                                // onChange={(e) => handleInputChange(e, "pass1")}
                               // onBlur={checkPassword}
                            />
                        </div>
                    
                        <div className="d-flex justify-content-center">
                          {/* <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                // onClick={handleSubmit}
                            /> */}
                            <button type="button"   class="btn btn-primary pr-4">Submit</button>
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
