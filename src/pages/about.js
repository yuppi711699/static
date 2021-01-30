import React from 'react'
import imgAbout from '../img/about.jpg'
    const imgStyles = {
  // height: '100%',
  // position: 'left',
  width:'50%',
  height: '100%',
  float: 'left',
  border: '0px',
  zIndex: '-1'
  // textAlign:'center',
  // lineHeight:'1.25em',
  // fontSize:'72p',
  // fontWeight: 'bold',
  // textTransform: 'uppercase'
  // backgroundImage: 'url(' + imgUrl + ')',
};
const mainTextStyles = {
  // fontFamily: {montseratFont}, 
  // position: 'absolute',
  // width:'50%',
  float: 'left',
  // top		  : '25%',
	// left		: '0',
  // width		: '100%',
  marginTop: '0', /* Отступ сверху */
    marginBottom: '0',
  width  : '40%',
  textAlign:'center',
  border: '0px',
  // lineHeight:'1.25em',
  fontSize:'40px',
  paddingLeft: '20px',

  // textColor: rgb(49, 83, 151),
  // fontWeight: 'bold',
  // textTransform: 'uppercase',
  
  color: 'rgb(49, 83, 151)',
}
const mainTextAddStyles = {
  // fontFamily: {montseratFont}, 
  // position: 'absolute',
  // width:'50%',
  float: 'left',
  // top		  : '25%',
	// left		: '0',
  // width		: '100%',
   marginTop: '0', /* Отступ сверху */
    marginBottom: '0',
  width  : '40%',
  textAlign:'center',
  border: '0px',
  // lineHeight:'1.25em',
  fontSize:'15px',
  lineHeight: '1.25em',
  letterSpacing: 'normal',
  paddingLeft: '20px',

  // textColor: rgb(49, 83, 151),
  // fontWeight: 'bold',
  // textTransform: 'uppercase',
  
  color: 'rgb(49, 83, 151)',
}
 const About = () => (
  <div>
<img style={imgStyles}
      src={imgAbout} />
    
    {/* <div style={{
      backgroundColor: 'rgba(38,82,156,0.5)',
      position: 'absolute',
  top		: '40%',
	left		: '0',
	width		: '100%',
  }}> */}
    <h1 style={mainTextStyles}>О НАШЕЙ <br/>КОМПАНИИ</h1>
    <h3 style={mainTextAddStyles}>«ЮГ АвтоТранс» предлагает своим клиентам качественные автомобили высокого класса. Имея большой ассортимент транспортных средств, мы гарантируем, что любому покупателю подберем подходящую модель. Компания «ЮГ АвтоТранс» гордится тем, что может предложить автомобили не только на любой вкус, но и на любой бюджет.</h3>



  </div>
)
export default About;