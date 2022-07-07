import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  
  console.log(props)
  const arrayProduct = [
    {
      id: 1,
      name: "VinSmart Live",
      screen: "AMOLED, 6.2, Full HD+",
      system: "Android 9.0 (Pie)",
      frontCam: "20 MP",
      backCam: "48 MP 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 600,
      img: "./img/vsphone.jpg",
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      system: "Android 9.0 (Pie); Flyme",
      frontCam: "20 MP",
      backCam: " 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 800,
      img: "./img/meizuphone.jpg",
    },
    {
      id: 3,
      name: "Iphone XS Max",
      screen: "OLED, 6.5, 1242 x 2688 Pixels",
      system: "iOS 12",
      frontCam: " 12 MP & Phụ 12 MP",
      backCam: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 900,    
      img: "./img/applephone.jpg",
    },
  ];
  const renderProduct = () => {
    return arrayProduct.map((product, index) => {
         return (
        <div className="col-4" key={index}>
          <ProductItem productProps={product} addProductProps={props.addProductProps}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">{renderProduct(arrayProduct)}<div/>
          
        </div>
      </div>
    </div>
  );
}
