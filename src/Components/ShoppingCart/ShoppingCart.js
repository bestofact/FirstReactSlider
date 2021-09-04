import "./ShoppingCart.css";
import React from "react";
import {ReactComponent as ShoppingCartSVG} from "./shopping-cart.svg";


function ShoppingCart({inCartCount})
{

    return(
        <div className = "ShoppingCartContainer">
            <ShoppingCartSVG className="CartSVG"/>
            <div className="InCartCount">
                <span>{inCartCount}</span>
            </div>
        </div>
    )
}


export default ShoppingCart;