import React, { useEffect, useState } from 'react'

export default function Searchproduct() {
    const [products1 , setproducts] = useState("");
    
    var data1 = [
        {
            "make": "Gibson",
            "model": "Les Paul",
            "type": "Electric",
            "price": "$3,000",
            "image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
        },
        {
            "make": "Gibson",
            "model": "SG",
            "type": "Electric",
            "price": "$1,500",
            "image": "http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe"
        },
        {
            "make": "Fender",
            "model": "Telecaster",
            "type": "Electric",
            "price": "$2,000",
            "image": "http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b"
        },
        {
            "make": "Fender",
            "model": "Stratocaster",
            "type": "Electric",
            "price": "$2,000",
            "image": "http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9"
        },
        {
            "make": "Gretsch",
            "model": "White Falcon",
            "type": "Electric",
            "price": "$5,000",
            "image": "http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e"
        },
        {
            "make": "Paul Reed Smith",
            "model": "Custom 24",
            "type": "Electric",
            "price": "$5,000",
            "image": "http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763"
        },
        {
            "make": "Gibson",
            "model": "Hummingbird",
            "type": "Acoustic",
            "price": "$2,500",
            "image": "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea"
        }
    ];
    // const [productlist , setproductlist] = useState("");
    
    
    useEffect(() => {
       setproducts(data1); 

       console.log(products1);
});

    //     fetch('https://fakestoreapi.com/products')
    //     // fetch('https://fakestoreapi.com/products?limit=5')
    //     .then(results => results.json())
    //     .then(data => {
    //    console.log(data);
    //     //   setproductlist(data);
    //     setproducts(data);
    //     //   alert("ddd");
    //     });
        
    


  return (
<>

<div class="container">

	<div class="row" id="search">
		<form id="search-form" className='row' action="" method="POST" enctype="multipart/form-data">
			<div class="form-group col-9">
				<input class="form-control" type="text" placeholder="Search" />
			</div>
			<div class="form-group col-3   ">
				<button type="submit" class="btn ms-5 w-75 btn-block btn-primary">Search</button>
			</div>
		</form>
	</div>
	<div class="row mt-4" id="filter">
		<form className='row'>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="make" class="filter-make filter form-control">
					<option value="">Select Make</option>
					<option value="">Show All</option>
				</select>
			</div>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="model" class="filter-model filter form-control">
					<option value="">Select Model</option>
					<option value="">Show All</option>
				</select>
			</div>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="type" class="filter-type filter form-control">
					<option value="">Select Type</option>
					<option value="">Show All</option>
				</select>
			</div>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="price" class="filter-price filter form-control">
					<option value="">Select Price Range</option>
					<option value="">Show All</option>
				</select>
			</div>
		</form>
	</div>


    <div className="render-area">
{/* 
    {productlist.map((productItem, index) => (
            <div key={index}>
              <h2>{productItem.name}</h2>
            </div>
    ))} */}



          <div className="row mt-4">
          {/* {products1.map((productItem, index) => ( */}
       
            
        
          {/* <div class="card col-3"  key={index} > */}
          <div class="card col-3 m-3"   >
       <img class="img" src="https://placehold.co/600x400"
        width="100%" height="240px"></img>
  <div class="card-body">
  
    {/* <h5 class="card-title">{productItem.make}</h5> */}
    <h6 class="card-subtitle mb-2 text-muted">GoPro HERO6 4K Action</h6>
    <h6 class="card-subtitle mb-2 text-muted">Camera - Black</h6>
     <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
    <a href="#" class="btn btn-outline-primary card-link"> <i class="fa-solid fa-heart"></i></a>
  </div>
    </div>
      {/* ))} */}
          </div>

    </div>
</div>
</>
  )
}
