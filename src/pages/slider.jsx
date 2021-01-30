import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwsSliderStyles from './styles.scss';
import styles from './styles.scss';
const Slider = (
  <AwesomeSlider cssModule={styles}>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);
export default Slider;