import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About = ()=>{

  return (
    <div className='about-container'>
      <h1 className='about-header'>About ME</h1>
      <p className='about-p'>I am an aspiring full stack javascript developer! I got into coding in about april 2021.
      At the time I was doing roadwork in Las Vegas after moving there from Utah. Currently I live back
      in Utah and really enjoying programming! Cars, Motorcycles and video games are a big passion of mine.
      Ive had a few motorcycles, but had to sell my last one due to moving, hopefully I can get another one soon.</p>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'><FontAwesomeIcon icon={faHouse} /></button>
      </ScrollIntoView>
    </div>
  )
}

export default About;