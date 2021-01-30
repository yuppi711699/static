import React from 'react'
import CalculateCar from '../containers/Dynamic';
import imgMain from '../img/mainFinish.jpg'
import About from './about';
import SliderBlock from './blog'
let montseratFont = require('typeface-montserrat');
// import p from url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
// import PlayFairFont from '../fonts/';
//https://fonts.google.com/specimen/Playfair+Display?vfonly=true#license
const imgStyles = {
  position: 'relative',
  float: 'top',
  width: '${window.innerWidht}px',
  
  // width:'1400px',
  border: '0px',
  zIndex: '-1'

};
// const coverStyles = {
//   // height: '100%',
//   position: 'absolute',
//   wight:'140%',
//   height:'57.6%',
//   // border: '0px',
//   // textAlign:'center',
//   // lineHeight:'1.25em',
//   // fontSize:'72p',
//   // fontWeight: 'bold',
//   // textTransform: 'uppercase',
//   opacity: '0.27',
//   // backgroundImage: 'url(' + imgUrl + ')',
// };
const mainTextStyles = {
  // fontFamily: {montseratFont}, 
  position: 'absolute',
  top		  : '15%',
	left		: '0',
  width		: '100%',
  // height  : '20%',
  textAlign:'center',
  lineHeight:'1.25em',
  fontSize:'72px',
  color: 'white',
  // fontWeight: 'bold',
  textTransform: 'uppercase',
  
  // textColor: 'green',
}
const mainText1Styles = {
  position: 'absolute',
    top		: '25%',
	left		: '0',
	width		: '100%',
  textAlign:'center',
  lineHeight:'1.25em',
  fontSize:'72px',
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  // textColor: 'green',
}
const mainAddTextStyles = {



//     fontFamily: 'Playfair_Display',
//     fontWeight: '900',
//     src: local('Playfair_Display'), 
//     // url('./fonts/PlayfairDispla_wght.ttf') format ('ttf')
//     // format('opentype');
// },
  fontFamily: 'Montserrat-sans-serif-800',
  position: 'absolute',
  top		: '40%',
	left		: '0',
	width		: '100%',
  textAlign:'center',
  lineHeight:'1.25em',
  fontSize:'20px',
  color: 'white',
  
  // fontWeight: 'bold',
  // textTransform: 'uppercase',
}
const FirstBlock = () => (



  <div >
    {/* <h1 style={mainTextStyles}>ЮГ АВТОТРАНС</h1> */}
    {/* <img style={coverStyles} 
      src={blueCover} alt=""/> */}
    <img style={imgStyles}
      src={imgMain} alt="ЮГ АВТОТРАНС"/>
    
    {/* <div style={{
      backgroundColor: 'rgba(38,82,156,0.5)',
      position: 'absolute',
  top		: '40%',
	left		: '0',
	width		: '100%',
  }}> */}
    <h1 style={mainTextStyles}>ЮГ</h1>
    <h1 style={mainText1Styles}>АВТОТРАНС</h1>
    <h2 style={mainAddTextStyles}>У нас вы найдете свой автомобиль</h2>
  </div>

)
const MainPage = () => (
  <>
  <FirstBlock/>
  <About/>
  <SliderBlock/>
  <CalculateCar/>
</>
)
export default MainPage;

{/* <div class="container-fluid">
  <div class="row">	
  <div class="img-wrap">		
    <img src="/img/image.jpg" class="img-responsive">
    <h1>text</h1>
 </div>
</div>	  		
</div>


.img-wrap {
  position: relative;
}

.img-wrap h1 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
} */}