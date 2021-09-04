import "./Main.css";
import Slider from "../Slider/Slider";
import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Main()
{
    // I will update productsInCart from ProductBox Component, which is in Slider Component.
    // I will also use it to show amount in ShoppingCart Component.
    // Since I don't know how to change a state from a different component ( like creating productsInCart in ShoppingCart Component
    // and update it from Slider Component ), I created it at the main component and pass it through parameters to other components.
    const [productsInCart, setProductsInCart] = React.useState([]);

    return (
        <div className = "MainContainer">
            <Slider productsInCart = {productsInCart} setProductsInCart = {setProductsInCart}/>
            <ShoppingCart inCartCount = {productsInCart.length} />
        </div>
    )
}

export default Main;