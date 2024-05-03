import React, { useEffect, useState } from "react";
import users from "../components/UserList";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

export default function Searchproduct() {
  const [products1, setproducts] = useState("");
  const [productsItem, setproductsItem] = useState("");
  const [productsSearchResult, setproductsSearchResult] = useState("");
  const [userList, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);

  var data1 = [
    {
      make: "Gibson",
      model: "Les Paul",
      type: "Electric",
      price: "$3,000",
      image:
        "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd",
    },
    {
      make: "Gibson",
      model: "SG",
      type: "Electric",
      price: "$1,500",
      image:
        "http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe",
    },
    {
      make: "Fender",
      model: "Telecaster",
      type: "Electric",
      price: "$2,000",
      image:
        "http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b",
    },
    {
      make: "Fender",
      model: "Stratocaster",
      type: "Electric",
      price: "$2,000",
      image:
        "http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9",
    },
    {
      make: "Gretsch",
      model: "White Falcon",
      type: "Electric",
      price: "$5,000",
      image:
        "http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e",
    },
    {
      make: "Paul Reed Smith",
      model: "Custom 24",
      type: "Electric",
      price: "$5,000",
      image:
        "http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763",
    },
    {
      make: "Gibson",
      model: "Hummingbird",
      type: "Acoustic",
      price: "$2,500",
      image:
        "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea",
    },
  ];

  // const [productlist, setproductlist] = useState("");

  useEffect(() => {
    // setproductlist(data1);
    // alert("ddd");
    console.log(products1);
    getUsers(userList);

    fetch("http://localhost/backend/productdata.php")
      .then((data) => data.json())
      .then((data) => {
        // alert("Fatch call..");
        // console.log(data[0]);
        setproductsItem(data[0]);
        setproductsSearchResult(data[0]);
        
        
      });

  }, []);

  // console.log(productsItem,"Products Item Search");


  const handleSearch = (e) => {
    const query = e.target.value;
    // setSearchQuery(query);
    const filteredData = productsItem.filter(item =>
      item.pname.toLowerCase().includes(query.toLowerCase())
    );
    setproductsSearchResult(filteredData);
  };

  const handleCategory = (e) => {
    const query = e.target.value;
    // setSearchQuery(query);
    const filteredData = productsItem.filter(item =>
      item.ptype.toLowerCase().includes(query.toLowerCase())
    );
    setproductsSearchResult(filteredData);
  };

  //Simulating making api call with useEffect
  const getUsers = (userList) => {
    setUsers(userList);
  };

  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };
  const bySearch = (user, search) => {
     console.log('User Data',user);
     console.log('Search Data',search);

    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users, category, search) => {
    return users
      .filter((user) => byCategory(user, category))
      .filter((user) => bySearch(user, search));
  };



  // const thisProduct = productsData.find(prod => prod.id === productId)
  

  return (
    <>
      <div class="container">
    
        {/* <div class="row" id="search">
		<form id="search-form" className='row' action="" method="POST" enctype="multipart/form-data">
			<div class="form-group col-9">
				<input class="form-control" type="text" placeholder="Search" />
			</div>
			<div class="form-group col-3   ">
				<button type="submit" class="btn ms-5 w-75 btn-block btn-primary">Search</button>
			</div>
		</form>
	</div> */}
        {/* <div class="row mt-4" id="filter">
		<form className='row'>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="make" class="filter-make filter form-control">
					<option value="">Search by product name</option>
					<option value="">Show All</option>
				</select>
			</div>
			<div class="form-group col-3 col-xs-6">
				<select data-filter="model" class="filter-model filter form-control">
					<option value="">Search by company name </option>
					<option value="">Show All</option>
				</select>
			</div>
			
		</form>
	</div> */}
        <div>
          <div className="row">
            <div className="col-12 m-5 row">
              <div class="form-group col-4 col-xs-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by name ..."
                  // onChange={(e) => setSearch(e.target.value)}
                  onChange={handleSearch}
                />
              </div>

              <div class="form-group col-4 col-xs-6">
                <select
                  // onChange={(e) => setCategory(e.target.value)}
                  onChange={handleCategory}
                  className="form-control"
                >
                  <option value="">Choose Category</option>
                  <option value="movies">Movies</option>
                  <option value="games">Games</option>
                  <option value="gadgets">gadgets</option>
                  <option value="shows">Shows</option>
                  <option value="other">Other</option>{" "}
                </select>
              </div>
              <div class="form-group col-4   ">
                <button
                  type="submit"
                  class="btn ms-5 w-75 btn-block btn-primary"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="render-area">
          <div className="card-wrapper mt-4">
         

            {productsSearchResult.length ? (
              productsSearchResult.map((productitemlist) => (
                <div className="card col-3 ">
               {/* <Link className="btn-item auction-btn mr-2" to={`/productdetail/${productitemlist.id}`}> */}
               <Link className="btn-item auction-btn mr-2"  to={`/productdetail/${productitemlist.id}`}>
               {/* <Link className="btn-item auction-btn mr-2" to={`/productDetails/${productitemlist.id}`}> */}


                    <img
                      className="card-img-top"
                      src={`http://localhost/backend/upload/${productitemlist.pimg}`}
                      alt=""
                    />
                   {/* <p> {productitemlist.pimg}</p> */}
                   <div className="card-body">
                    <h3>Name : <span>{productitemlist.pname}</span></h3>
                    <p> Brand : <span>{productitemlist.pmname}</span></p>
                    <p> Price :<span>{productitemlist.pprice}</span></p>
                    <h6> Type : {productitemlist.ptype}</h6>
                    <button>Add to Cart</button>
                   </div>
                   </Link>
                  </div>
             
              ))
            ) : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading"></div>
                </div>
              </div>
            )}
          </div>
          {/* <div className="row mt-4">
            {filteredList(users, category, search).map((user) => (
              <div className="card col-3 m-3">
                <div key={user.id}>
                  <img className="img-thumbnail" src={user.dataitem} alt="" />
                  <p>{user.email} </p>
                  <p>{user.imgss}</p>
                  <h3>{user.name} </h3>
                  <h3>{user.username} </h3>
                  <p> Cat:- {user.dataitem} </p>
                  <p> Cate:- {user.company.name} </p>
                </div>
              </div>
            ))}
          </div> */}
          {/* {productlist.map((productItem, index) => (
            <div key={index}>
              <h2>{productItem.name}</h2>
            </div>
    ))}
 */}

          <div className="row mt-4">
            {/* {products1.map((productItem, index) => ( */}

            {/* <div class="card col-3"  key={index} > */}
            {/* <div class="card col-3 m-3"   >
       <img class="img" src="https://placehold.co/600x400"
        width="100%" height="240px"></img>
  <div class="card-body"> */}

            {/* <h5 class="card-title">{productItem.make}</h5> */}
            {/* <h6 class="card-subtitle mb-2 text-muted">GoPro HERO6 4K Action</h6>
    <h6 class="card-subtitle mb-2 text-muted">Camera - Black</h6>
     <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
    <a href="#" class="btn btn-outline-primary card-link"> <i class="fa-solid fa-heart"></i></a>
  </div>
    </div> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
