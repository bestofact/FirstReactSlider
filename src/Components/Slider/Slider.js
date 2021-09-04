import './Slider.css';
import ProductBox from "../ProductBox/ProductBox";
import React from "react";

function Slider({productsInCart, setProductsInCart})
{

  // 50 of the Jsons that fetched from jsonplaceholder will be stored in here.
  const [allProductInfoList, setAllProductInfoList] = React.useState([0,1,2,3,4]);
  // .slice(firstProdcutIndex, firstProductIndex + 5) to get 5 of the Jsons in allProductInfoList.
  const [firstProductIndex, setFirstProductIndex] = React.useState(0);
  // It is a style attribute. Used for changing the rotation of the productBox'es.
  const [boxTransform, setBoxTransform] = React.useState('rotateY(180deg) scaleX(-1)');


  // Fetch data, pick 50 of Jsons and add them to allProductInfoList.
  React.useEffect( function() {
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(data => setAllProductInfoList(data.slice(0,50)));
  }, []);


  // It flip/flops between productBox's rotation style. scaleX is used for mirror effect when we rotate it at Y for 180 degrees.
  function FlipCards()
  {
    boxTransform === 'rotateY(180deg) scaleX(-1)' ? setBoxTransform('rotateY(0deg) scaleX(1)') : setBoxTransform('rotateY(180deg) scaleX(-1)');
  }


  // Slider Button Click functions. Simply Increases or decreases firstProductIndex by 5 in boundaries of allProductInfoList.
  function NextProducts()
  {
    if (firstProductIndex+5 <allProductInfoList.length)
    {
      FlipCards();
      setFirstProductIndex(firstProductIndex+5);
    }
  }
  function PreviousProducts()
  {
    if (firstProductIndex >= 5)
    {
      FlipCards();
      setFirstProductIndex(firstProductIndex-5);
    }
  }


  /* I tried to add ProductBox elements with allProductInfoList.map but it will recreate the elements when a render is called.
  *   So rotation effect will be canceled since the elements are basically destroyed and recreated. Instead of it I wanted to change
  *   the productInfo inside that elements and rotate them. Not completaly destroy and recreate them. So, I added 5 of them manually.
  *   I also didn't migrated boxTransform, globalCartList, setGlobalCartList in one Object because I couldn't find a proper variable name
  *   for them.
  */
  return (
    <div className="Slider">
    <button className="ChangeButton" onClick={PreviousProducts} disabled={firstProductIndex===0}>«</button>
    <ProductBox productInfo = {allProductInfoList[firstProductIndex]} boxTransform = {boxTransform} globalCartList = {productsInCart} setGlobalCartList = {setProductsInCart}></ProductBox>
    <ProductBox productInfo = {allProductInfoList[firstProductIndex+1]} boxTransform = {boxTransform} globalCartList = {productsInCart} setGlobalCartList = {setProductsInCart}></ProductBox>
    <ProductBox productInfo = {allProductInfoList[firstProductIndex+2]} boxTransform = {boxTransform} globalCartList = {productsInCart} setGlobalCartList = {setProductsInCart}></ProductBox>
    <ProductBox productInfo = {allProductInfoList[firstProductIndex+3]} boxTransform = {boxTransform} globalCartList = {productsInCart} setGlobalCartList = {setProductsInCart}></ProductBox>
    <ProductBox productInfo = {allProductInfoList[firstProductIndex+4]} boxTransform = {boxTransform} globalCartList = {productsInCart} setGlobalCartList = {setProductsInCart}></ProductBox>
    <button className="ChangeButton" onClick={NextProducts} disabled={(firstProductIndex+5)===allProductInfoList.length}>»</button>
    </div>
  );
}

export default Slider;
