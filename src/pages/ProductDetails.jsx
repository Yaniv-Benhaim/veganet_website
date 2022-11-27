import React from 'react'
import line from '../images/line.png';
import arrow from '../images/arrow-right.png';
import bLine from '../images/product-line.png';
import { useParams} from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDetails = (props) => {
    const location = useLocation();
    // console.log(props, " props");
    // console.log(location, " useLocation Hook");
    const product = location.state?.product;

    console.log(product);
  return (
    <div className='outerProduct'>
        TESTING TYESGSMLKFM SD 
    <div className='product'>  
        <div className='textContainerB'>
          <h1>
              {product.specs.productTitle}
          </h1>
          <p className='subText'>
            {product.specs.productDescription}
          </p>
          <h2>
              Product specifications
          </h2>

          <div className='specsContainer'>
            <div className='textContainerC'>
              <p className='subTextSpecs'>
                Cameras: 
              </p>
              <p className='subTextSpecs'>
                Application: 
              </p>
              <p className='subTextSpecs'>
                Detections: 
              </p>
            </div>
            <div className='textContainerC'>
              <p className='subTextSpecsB'>
                {product.specs.cameras}
              </p>
              <p className='subTextSpecsB'>
                {product.specs.app}
              </p>
              <p className='subTextSpecsB'>
                {product.specs.detections}
              </p>
            </div>
          </div>
         
        
        
          <div onClick={() => {alert(product.title)}} className='watchDemoBtn' >
            <p>More info</p>
            <img className='line' src={line} />
            <img className='arrow' src={arrow} />
          </div>
        </div> 

        <img src={product.img} className='productImage' />
    </div>
    <img className='bLine' src={bLine} />
    </div>
  )
}

export default ProductDetails