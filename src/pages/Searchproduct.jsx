import React from 'react'

export default function Searchproduct() {
  return (
<>

<div class="container">

	<div class="row" id="search">
		<form id="search-form" className='row' action="" method="POST" enctype="multipart/form-data">
			<div class="form-group col-9">
				<input class="form-control" type="text" placeholder="Search" />
			</div>
			<div class="form-group col-3 mx-auto ">
				<button type="submit" class="btn ml-4 btn-block btn-primary">Search</button>
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
</div>
</>
  )
}
