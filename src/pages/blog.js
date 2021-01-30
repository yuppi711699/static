  import React from 'react';
// import renderHTML from 'react-render-html';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import mainImg from '../img/main.jpg'
import aboutImg from '../img/about.jpg'
import orderImg from '../img/order.png'
// import AwsSliderStyles from './styles.scss';
import styles from './styles.scss';
// import Slider from './slider.jsx'
const SliderBlock = () => (
 
  // return (
    <>
    {/* <Slider></Slider> */}
    
    <div>
      <br></br>
      {/* <h1>It's blog time.</h1> */}
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
        <AwesomeSlider cssModule={styles}>
    <div data-src={mainImg} />
    <div data-src={aboutImg} />
    <div data-src={orderImg} />
  </AwesomeSlider>
        {/* <AwesomeSlider cssModule={styles}>
    <div data-src="../img/about.jpg" />
    <div data-src="../img/blue.jpg" />
    <div data-src="../img/main.jpg" />
  </AwesomeSlider>
  const slider = ( */}
  {/* <AwesomeSlider
    media={[
      {
        source: {main} //'https://drive.google.com/drive/u/0/folders/1K1y8WRRKT1lutFoVDvAxyQzLyE-6MZ8J')},
        // <img src={require('../img/about.jpg')}/>
      },
      {
        source: 'https://drive.google.com/drive/u/0/folders/1K1y8WRRKT1lutFoVDvAxyQzLyE-6MZ8J',
      },
      {
        source: 'https://drive.google.com/drive/u/0/folders/1K1y8WRRKT1lutFoVDvAxyQzLyE-6MZ8J',
      },
    ]}
  />
); */}
      </div>
      <br />
      <ul></ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
    </>
  // )
)


export default SliderBlock;
