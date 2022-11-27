import React, { useState } from 'react'
import portal from '../images/portal.png';
import line from '../images/line.png';
import arrow from '../images/arrow-right.png';

const Home = () => {
    const [showDemo, setShowDemo] = useState(false);
    const Video = <video className='demoVideo' controls autoPlay>
      <source src="https://video-previews.elements.envatousercontent.com/h264-video-previews/7adafc7e-18d2-4e00-846f-a12b169ff778/21513707.mp4" type="video/mp4" />
    </video>;
  return (
    <div>
        <header className="App-header">
        
        <img className={showDemo ? 'portalAnimation' : 'portal'} src={portal} />  
        {showDemo ? Video : <div />}
        
      </header>
      <div className='textContainer'>
          <h1>identify threats<br/>
              with veganet<br/>
              security<br/>
          </h1>
          <p className='subText'>
            Easy deployable and cheap ai solution for preventing<br/>
            theft, violance and terror. Track suspects over a <br/>
            network of cameras deployed with veganet.<br/>
          </p>
          <div onClick={() => setShowDemo(true)} className='watchDemoBtn' >
            <p>Watch Demo</p>
            <img className='line' src={line} />
            <img className='arrow' src={arrow} />
          </div>
        </div> 
    </div>
  )
}

export default Home