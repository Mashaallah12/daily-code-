import React, { useState } from 'react'
import './Product.css'
const ProductMain = (props) => {
    // const productName = props.productName;
    // const productPrice = props.productPrice;
    // const productdiscription = props.productdiscription;
    // const btn = props.btn;
    const [productName, setProductname] = useState(props.productName)
    const [productPrice, setProductprice] = useState (props.productPrice)
    const [productdiscription, setproductdis] = useState (props.productdiscription)
    const [btn, settitle] = useState (props.btn)
   
    function onclickHandler() {
        console.log("checked")
        settitle("cancel")
        setProductname("Thanks😊")
        setProductprice("145$")
        setproductdis("item selected✅")
        
    }
    // function onclickHandler() {
    //     console.log("rechecked")
    // }
    return (
        <div className='mai'>
            <div className="container">
            <h3>{productName}</h3>
            <h4>{productPrice}</h4>
            <p>{productdiscription}
                !</p>
                <button onClick={onclickHandler}>{btn}</button>
            </div>
        </div>
    )
}

export default ProductMain
