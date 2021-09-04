import "./ProductBox.css";
import React from "react";


function ProductBox({productInfo, boxTransform, globalCartList, setGlobalCartList})
{

    // globalCartList is the productsInCart from Main.js file.
    // Append this element's productInfo to array when button is clicked.
    function AddToCart()
    {
        console.log(globalCartList);
        setGlobalCartList([...globalCartList, productInfo]);
    }

    return (
        <div className="ProductBox" style={{ transform: boxTransform }} >
            <img className = "ProductImageBox" src = {productInfo.url} alt="Product Is Not Visible"/>
            <span className = "ProductTitle" >{productInfo.title}</span>
            <button className = "AddToCartButton" onClick={ AddToCart }>Sepete Ekle</button>
        </div>
    )
}

export default ProductBox;