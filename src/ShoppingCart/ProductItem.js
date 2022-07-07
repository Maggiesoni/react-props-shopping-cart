import React from "react";

export default function ProductItem(props) {
  // console.log(props)
  let {productProps, addProductProps} = props
 
  

  return (
    <div classname="card text-center">
      <img
        classname="card-img-hitop"
        src={productProps.img}
        alt={productProps.name}
        style={{width: 300, height: 300}}
      />
      <div classname="card-body text-center">
        <h4 classname="card-title">{productProps.name}</h4>
        <p classname="card-text">{productProps.price}</p>
        <button className="btn btn-success" onClick={() => {addProductProps(productProps)}}>
          Add to cart
        </button>
      </div>
    </div>  
  );
}
