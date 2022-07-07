import React, { useState } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default function Cart() {
  const [cartArray, setCartArray]=useState([])

  const addProduct=(product)=>{
    //check the id of the product, whether it is in the cartArray
    let indexProduct =cartArray.findIndex((item)=>item.id===product.id);
    let updateQuantityArray = [...cartArray];
    console.log(indexProduct);
    if(indexProduct!==-1){
      // console.log("Product already exists, update quantity")
      // console.log(indexProduct)
     updateQuantityArray[indexProduct].quantity+=1
     //find the product is in the array, update the quantity of the product
     setCartArray(updateQuantityArray)
    }
    else{
      let updatedProduct = {...product, quantity:1}             
      updateQuantityArray=[...cartArray,updatedProduct]
    setCartArray(updateQuantityArray)
    }
    //updated the array of cart
  };
  const removeProduct =(id)=>{
    let updatedProductArray=[...cartArray];
    let indexProduct = updatedProductArray.findIndex((cartItem)=>{ 
      return cartItem.id ===id
    });

    if(indexProduct!==-1){
      updatedProductArray.splice(indexProduct, 1)
    }
    setCartArray(updatedProductArray)
  }
  console.log(cartArray);
  const calculateTotalQuantity =(cartArray)=>{
    return cartArray.reduce((accummulator,current)=>{
      return(accummulator+=current.quantity);
    },0)
  }
  
  return (
    <div className="container-fluid">
      <h3 className="text-center">Shopping Cart</h3>
      <div className="text-right">
        <span
          style={{width: 17, cursor: "pointer"}}
          data-toggle="modal"
          data-target="#modelId"
        >
          <i className="fa fa-cart mr-5">
            <i class="fa fa-cart-arrow-down"></i>({calculateTotalQuantity(cartArray)}) Cart
          </i>
        </span>
      </div>
      <CartModal cartArrayProps={cartArray} removeProduct = {removeProduct}  />
      <ProductList addProductProps={addProduct} />
    </div>
  );
}
