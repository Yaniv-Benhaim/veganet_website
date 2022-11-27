import React from 'react'
import Product from '../components/Product';
import aibox from '../images/aibox.png';
import camera from '../images/camera.png';

const Products = () => {
  const products = [
    {
      titleA: 'UPGRADE TO THE',
      titleB: 'BEST SECURITY',
      titleC: 'THERE IS',
      img: aibox,
      descriptionA: 'Join veganet and use you existing camera to',
      descriptionB: 'start detecting, tracking and preventing',
      descriptionC: 'threats with veganet AI.',
      flip: false,
      specs: {
        productTitle: 'VEGANET BASIC',
        productDescription: 'Veganet basic allows users to implement our software and start detection for basic threats on their existing cameras. This is perfect for users with up to 4 cameras',
        basicUsage: 'When a threat is detected the user gets notified through the app and the software. The user can then choose to track the target through the veganet imployed location. If a crime has been commited and the suspect left, the user can request to track the suspect over the whole Veganetwork.',
        detections: 'Weapons, Face, Theft',
        app: "Included up to 2 users",
        cameras: "Not included"
      }
    }, 
    {
      titleA: 'UPGRADE TO THE',
      titleB: 'BEST SECURITY',
      titleC: 'THERE IS',
      img: camera,
      descriptionA: 'Join veganet and use you existing camera to',
      descriptionB: 'start detecting, tracking and preventing',
      descriptionC: 'threats with veganet AI.',
      flip: true,
      specs: {
        productTitle: 'VEGANET BASIC',
        productDescription: 'Veganet basic allows users to implement our software and start detection for basic threats on their existing cameras. This is perfect for users with up to 4 cameras',
        basicUsage: 'When a threat is detected the user gets notified through the app and the software. The user can then choose to track the target through the veganet imployed location. If a crime has been commited and the suspect left, the user can request to track the suspect over the whole Veganetwork.',
        detections: 'Weapons, Face, Theft',
        app: "Included up to 2 users",
        cameras: "Not included"
      }
    },
    {
      titleA: 'UPGRADE TO THE',
      titleB: 'BEST SECURITY',
      titleC: 'THERE IS',
      img: aibox,
      descriptionA: 'Join veganet and use you existing camera to',
      descriptionB: 'start detecting, tracking and preventing',
      descriptionC: 'threats with veganet AI.',
      flip: false,
      specs: {
        productTitle: 'VEGANET BASIC',
        productDescription: 'Veganet basic allows users to implement our software and start detection for basic threats on their existing cameras. This is perfect for users with up to 4 cameras',
        basicUsage: 'When a threat is detected the user gets notified through the app and the software. The user can then choose to track the target through the veganet imployed location. If a crime has been commited and the suspect left, the user can request to track the suspect over the whole Veganetwork.',
        detections: 'Weapons, Face, Theft',
        app: "Included up to 2 users",
        cameras: "Not included"
      }
    }
  ];
  return (
    <div className='productsContainer w-full flex-col'>
      {products.map((product,index)=>{
         return <Product product={product} flip={product.flip} />
     })}
    </div>
  )
}

export default Products