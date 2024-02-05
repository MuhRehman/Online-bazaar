import React, { useEffect, useState } from 'react'
import users from "../components/UserList";

export default function Searchproduct() {
    const [products1 , setproducts] = useState("");
    const [userList, setUsers] = useState([]);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    
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

    const users = [
        {
          id: 1,
          category: "games",
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
        },
        {
          id: 2,
          category: "games",
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618"
            }
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
          }
        },
        {
          id: 3,
          category: "games",
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653"
            }
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
          }
        },
        {
          id: 4,
      
          category: "movies",
      
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990"
            }
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
          }
        },
        {
          id: 5,
          category: "movies",
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
              lat: "-31.8129",
              lng: "62.5342"
            }
          },
          phone: "(254)954-1289",
          website: "demarco.info",
          company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
          }
        },
        {
          id: 6,
          category: "shows",
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
              lat: "-71.4197",
              lng: "71.7478"
            }
          },
          phone: "1-477-935-8478 x6430",
          website: "ola.org",
          company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative applications"
          }
        },
        {
          id: 7,
          category: "shows",
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
              lat: "24.8918",
              lng: "21.8984"
            }
          },
          phone: "210.067.6132",
          website: "elvis.io",
          company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers"
          }
        },
        {
          id: 8,
          category: "shows",
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
              lat: "-14.3990",
              lng: "-120.7677"
            }
          },
          phone: "586.493.6943 x140",
          website: "jacynthe.com",
          company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers"
          }
        },
        {
          id: 9,
          category: "other",
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
              lat: "24.6463",
              lng: "-168.8889"
            }
          },
          phone: "(775)976-6794 x41206",
          website: "conrad.com",
          company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time technologies"
          }
        },
        {
          id: 10,
          category: "other",
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
              lat: "-38.2386",
              lng: "57.2232"
            }
          },
          phone: "024-648-3804",
          website: "ambrose.net",
          company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models"
          }
        }
      ];


    const [productlist , setproductlist] = useState("");
    
    
    useEffect(() => {
        setproductlist(data1); 
        // alert("ddd");
       console.log(products1);
       getUsers(userList);
    }, []);


      //Simulating making api call with useEffect
  const getUsers = userList => {
    setUsers(userList);
  };

  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };
  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users, category, search) => {
    return users
      .filter(user => byCategory(user, category))
      .filter(user => bySearch(user, search));
  };
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
        <div className='row'>
            
  <div className="col-12 m-5 row"> 
  <div class="form-group col-4 col-xs-6">
     <input
        type="search"
        className='form-control'
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
        />
        </div>

       <div class="form-group col-4 col-xs-6">
       <select onChange={e => setCategory(e.target.value)} className='form-control'>
        <option value="">Choose Category</option>
        <option value="movies">Movies</option>
        <option value="games">Games</option>
        <option value="shows">Shows</option>
        <option value="other">Other</option>{" "}
       </select>
        </div>
        <div class="form-group col-4   ">
				<button type="submit" class="btn ms-5 w-75 btn-block btn-primary">Search</button>
			</div>
      </div>
 
        </div>


      {filteredList(users, category, search).map(user => (
        <div key={user.id}>
          {user.name} : {user.category}
        </div>
      ))}
    </div>

    <div className="render-area">

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
  )
}
