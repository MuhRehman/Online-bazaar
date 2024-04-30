import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import {useParams, useLocation} from "react-router-dom";


export default function ProductDetail(id) {


    const {paramsId} = useParams();
    // const {id}= useParams()
    
    // const thisProduct = productsData.find(prod => prod.id === productId)
  
    const { state } = useLocation(); // <-- access route state

    const { item } = state || {}; // <-- unpack the item from state
      
    console.log(item,"Main item");


    console.log(paramsId,"ID");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get('paramName');
 
    console.log(paramValue);

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      
        fetchProducts();
       
    }, []);
    

    function fetchProducts() {
      axios
        .get("http://localhost/backend/productdata.php") 
        .then((res) => {
          console.log(res,"Fatch request ID"); 
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
     

  return (
    <div>
        
        <div class="container my-5">
        <div class="row">

            <div class="col-md-5">
                <div class="main-img">
                    <img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg" alt="ProductS" />
                    <div class="row my-3 previews">
                        <div class="col-md-3">
                            <img class="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg" alt="Sale" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-7">
                <div class="main-description px-2">
                   
                    <div class="category text-bold">
                        Category: Women
                    </div>
                   
                    {/* <h1>{productId}</h1>  */}
                    {/* <h1> Item ID: {id}</h1> */}
                    <pre>params: {JSON.stringify(paramsId)}</pre>
                    <pre>params: {}</pre>

                    <div class="product-title text-bold my-3">
                        Black dress for Women
                    </div>


                    <div class="price-area my-4">
                        <p class="old-price mb-1"><del>$100</del> <span class="old-price-discount text-danger">(20% off)</span></p>
                        <p class="new-price text-bold mb-1">$80</p>
                        <p class="text-secondary mb-1">(Additional tax may apply on checkout)</p>

                    </div>


                    <div class="buttons d-flex my-5">
                        <div class="block">
                            <a href="#" class="shadow btn custom-btn ">Wishlist</a>
                        </div>
                        <div class="block">
                            <button class="shadow btn custom-btn">Add to cart</button>
                        </div>

                        <div class="block quantity">
                            <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity"/>
                        </div>
                    </div>




                </div>

                <div class="product-details my-4">
                    <p class="details-title text-color mb-1">Product Details</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                </div>
              
                         <div class="row questions bg-light p-3">
                    <div class="col-md-1 icon">
                        <i class="fa-brands fa-rocketchat questions-icon"></i>
                    </div>
                    <div class="col-md-11 text">
                        Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
                    </div>
                </div>

                <div class="delivery my-4">
                    <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                    <p class="text-secondary">Order now to get this product delivery</p>
                </div>
                <div class="delivery-options my-4">
                    <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-filter"></i></span> <b>Delivery options</b> </p>
                    <p class="text-secondary">View delivery options here</p>
                </div>
                
            </div>

        </div>
    </div>

    <form class="container">
  <h1 class="heading">Give feedback</h1>
  <p class="para">What do you think of the issue with this pr?</p>

  <div class="feedback-level">
    <div class="level">
      <i class="lar la-sad-tear"></i>
    </div>
    <div class="level">
      <i class="las la-frown"></i>
    </div>
    <div class="level">
      <i class="lar la-meh"></i>
    </div>
    <div class="level">
      <i class="lar la-smile"></i>
    </div>
    <div class="level">
      <i class="lar la-grin"></i>
    </div>
  </div>

  <div class="feedback-msg">
    <p class="para">
      What are the main reasons for your rating?
    </p>
    <textarea name="" id=""></textarea>
  </div>

  <div class="agreement">
    <div class="checkbox">
      <input type="checkbox" name="" id="" />
      <label for="">I may be contacted about this feedback <a href="#">Privacy Policy</a>.</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" name="" id="" />
      <label for="">I'd like to help improve by joining the <a href="#">Reasearch Group</a>.</label>
    </div>
  </div>

  <div class="buttons">
    <a href="javascript:alert('Thanks for submiting your feedback')">Submit</a>
    <a href="You just cancelled your to submit the feedback">Cancel</a>
  </div>
</form>

    <div class="container similar-products my-4">
        {/* <hr> */}
        <p class="display-5">Similar Products</p>

        <div class="row">
            
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Preview" />
                    <p class="title">Lovely black dress</p>
                    <p class="price">$100</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview" />
                    <p class="title">Lovely Dress with patterns</p>
                    <p class="price">$85</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview" />
                    <p class="title">Lovely fashion dress</p>
                    <p class="price">$200</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview"/>
                    <p class="title">Lovely red dress</p>
                    <p class="price">$120</p>
                </div>
            </div>

        </div>
    </div>




    </div>

 
  )
}
