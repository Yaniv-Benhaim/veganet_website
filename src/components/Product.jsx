import React from 'react'
import line from '../images/line.png';
import arrow from '../images/arrow-right.png';
import bLine from '../images/product-line.png';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div className='outerProduct'>
    <div className='product'>

        
        {props.flip ? <></> : <img src={props.product.img} className='productImage'/>  }
        
        <div className='textContainerB'>
            <h1>
                {props.product.titleA}<br/>{props.product.titleB}<br/>{props.product.titleC}
            </h1>
          <p className='subText'>
            {props.product.descriptionA}
          </p>
          <p className='subText'>
            {props.product.descriptionB}
          </p>
          <p className='subText'>
            {props.product.descriptionC}
          </p>
          {/* <div onClick={() => {alert(props.product.title)}} className='watchDemoBtn' >
            <p>More info</p>
            <img className='line' src={line} />
            <img className='arrow' src={arrow} />
          </div> */}

          <Link to="/product-details" state={{ product: props.product }} className="watchDemoBtn">
          <p>More info</p>
            <img className='line' src={line} />
            <img className='arrow' src={arrow} />
          </Link>
        </div> 

        {props.flip ? <img src={props.product.img} className='productImage' />  : <></>}
    </div>
    <img className='bLine' src={bLine} />
    </div>
  )
}

export default Product