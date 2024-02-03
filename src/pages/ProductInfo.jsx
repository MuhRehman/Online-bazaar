import React from 'react'

export default function Login() {
  return (


    <>
        <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65")'}}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Enter Your Product Info</h2>
                      <p>
                          {/* {
                              msg !== "" ?
                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          } */}
                      </p>
                    
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Id</label>
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
                            <label className="form-label">Priduct Name</label>
                          <input 
                                type="password"
                                name="pass1"
                                className="form-control form-control-lg"
                                // value={pass1}
                                // onChange={(e) => handleInputChange(e, "pass1")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Menufacturer's Name </label>
                          <input 
                                type="password"
                                name="pass1"
                                className="form-control form-control-lg"
                                // value={pass1}
                                // onChange={(e) => handleInputChange(e, "pass1")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Model </label>
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
                          <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-primary text-white btn-block btn-lg gradient-custom-4 text-body"
                                // onClick={handleSubmit}
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
