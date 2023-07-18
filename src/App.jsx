import React from 'react'
import Header from './Components/Header'
import './sass/app.scss'
import heroImg from './assets/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png';
import mobileHeroImg from './assets/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png';
import databiz from './assets/intro-section-with-dropdown-navigation-main/images/client-databiz.svg';
import audiophile from './assets/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg';
import meet from './assets/intro-section-with-dropdown-navigation-main/images/client-meet.svg';
import maker from './assets/intro-section-with-dropdown-navigation-main/images/client-maker.svg';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <div className="hero">
        <div className="heroContent">
          <span className="heroTitle">
            Make remote work
          </span>
          <span className="heroText">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </span>
          <button className='learnMore'>Learn more</button>
          <ul className="clients">
            <li><img src={databiz} alt='databiz' /></li>
            <li><img src={audiophile} alt='audiophile' /></li>
            <li><img src={meet} alt='meet' /></li>
            <li><img src={maker} alt='maker' /></li>
          </ul>
        </div>
        <div className="heroImgContainer">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </main>
    </>
  )
}

export default App