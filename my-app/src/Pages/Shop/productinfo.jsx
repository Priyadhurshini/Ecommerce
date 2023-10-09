import React, {useContext} from 'react';
import './shop.css'
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
    const{id, productName, price, productImage} = props.data;
    const{ addToCart }= useContext(ShopContext)

  return (
    <div>
      <div className='product'>
        <img src={productImage}/>
        <div className='description'><p>
          <b>{productName}</b></p>
          <p>${price}</p>
          </div>
          <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
