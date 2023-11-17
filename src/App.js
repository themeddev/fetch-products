

// ** using function components **

import React, { useState, useEffect } from 'react';

export default function Ftest() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => setSearchQuery(e.target.value);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <div className="d-flex p-3">
        <h1 className="text-center">Products</h1>
        <input
          className="rounded-4 border-primary mx-5 px-3"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-danger px-3" onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  className="img-thumbnail rounded-2"
                  src={item.image}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ** using class components **


// import React, { Component } from "react";
// import { render } from "react-dom";

// import { useState } from "react";

// export default class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       isLoading: false,
//       searchQuery: "",
//       filteredProducts: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://dummyjson.com/products/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Product Data', data.products); 
//         this.setState({
//           products: data.products,
//           filteredProducts: data.products, // Initialize filteredProducts with all products
//           isLoading: true,
//         });
//       });
//   }

//   handleSearch = () => {
//     const { products, searchQuery } = this.state;
//     const filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     this.setState({ filteredProducts });
//   };

//   handleInputChange = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };

//   render() {
//     const { isLoading, filteredProducts } = this.state;

//     if (!isLoading) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div>
//         <div className="d-flex p-3">
//           <h1 className="text-center">Products</h1>
//           <input
//             className="rounded-4 border-primary mx-5 px-3"
//             type="text"
//             placeholder="Search"
//             value={this.state.searchQuery}
//             onChange={this.handleInputChange}
//           />
//           <button className="btn btn-danger px-3" onClick={this.handleSearch}>
//             Search
//           </button>
//         </div>
//         <table className="table table-dark table-striped">
//           <thead>
//             <tr className="text-center">
//               <th>Name</th>
//               <th>Price</th>
//               <th>Description</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
            // {filteredProducts.map((item) => (
            //   <tr key={item.id}>
            //     <td>{item.title}</td>
            //     <td>{item.price}</td>
            //     <td>{item.description}</td>
            //     <td>
            //       <img className="rounded-2" src={item.thumbnail} alt="" />
            //     </td>
            //   </tr>
            // ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };