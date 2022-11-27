import React from 'react';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import camera from '../images/camera.png';

const NavBar = () => {


  const testProduct = {
    titleA: 'UPGRADE TO THE',
    titleB: 'BEST SECURITY',
    titleC: 'THERE IS',
    img: camera,
    descriptionA: 'Join veganet and use you existing camera to',
    descriptionB: 'start detecting, tracking and preventing',
    descriptionC: 'threats with veganet AI.',
    flip: true
    }

    const [selectedPage, setSelectedPage] = useState('home');
    const isSelected = (page) => {
        return selectedPage == page;
    }

  return (
    <nav>
          <div className='logoContainer'>
            <img className='appLogo' src={logo} />
            <p className='appTitle'>Veganet</p>
          </div>
          <Link onClick={() => setSelectedPage('home')} to='/' className={isSelected('home') ? 'selectedLink' : 'link'}>Home</Link>
          <Link onClick={() => setSelectedPage('products')} to='/products' className={isSelected('products') ? 'selectedLink' : 'link'}>Products</Link>
          <Link onClick={() => setSelectedPage('solutions')} to='/solutions' className={isSelected('solutions') ? 'selectedLink' : 'link'}>Solutions</Link>
          <Link onClick={() => setSelectedPage('developers')} to='/developers' className={isSelected('developers') ? 'selectedLink' : 'link'}>Developers</Link>
          <Link onClick={() => setSelectedPage('contact')} to='/contact' className={isSelected('contact') ? 'selectedLink' : 'link'}>Contact</Link>
          
      </nav>
  )
}

export default NavBar