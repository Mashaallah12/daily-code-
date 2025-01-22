import React from 'react'
import ProductMain from './ProductMain'
// import './Product.css'
import './form.css'
const Forms1 = () => {
  const response = [
    {
      productName:"reebok",
      productPrice:"price - 140$/-",
      productdiscription:"this product is to good make sure you buy",
      btn:"buy "
    },
    {
      productName:"nike",
      productPrice:"price - 1490$/-",
      productdiscription:"this product is to good make sure you buy",
      btn:"buy "
    },
    {
      productName:"adidas",
      productPrice:"price - 130$/-",
      productdiscription:"this product is to good make sure you buy",
      btn : "buy "
      
    },
  ]

  return (
    <div className='form'>
       <ProductMain 
       productName = {response[0].productName}
       productPrice = {response[0].productPrice}
       productdiscription = {response[0].productdiscription}
       btn = {response[0].btn}
       />
       <ProductMain 
       productName = {response[1].productName}
       productPrice = {response[1].productPrice}
       productdiscription = {response[1].productdiscription}
       btn = {response[1].btn}
       />
       <ProductMain 
       productName = {response[2].productName}
       productPrice = {response[2].productPrice}
       productdiscription = {response[2].productdiscription}
       btn = {response[2].btn}
       />
    </div>
  )
}

export default Forms1
