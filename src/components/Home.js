import "./HomeStyles.css";
import TimeLineHome from './TimeLineHome';
import Map from './Map'
import React, { useState, useRef } from 'react';
import placeholderImg from '../video/img6.png';
// import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
// import { EditControl} from "react-leaflet-draw";
// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";
// import { React } from "react";
// import backgroundVideo from "../video/video4.mp4";
// import img from "../video/img2.png";
 import Widget from "./Widget";
import RightSideBar from "./RightSideBar";
import ToolBar from "./ToolBar";
import SideMenu from "./SideMenu";
const Home = () => {
  const [currentVideoSrc, setCurrentVideoSrc] = useState({ src: '', data: [] , drone:[] });
  const videoRef = useRef(null);

  const handleVideoSelect = (src) => {
    setCurrentVideoSrc(src);
  };

  return (
    <>
    <div id="Home">
            <div id="toolbar">
              <ToolBar/>
            </div>

            <div id="sidebar">
              <SideMenu/>
            </div>

            <div id="RightSideBar">
              <RightSideBar videoRef={videoRef} data={currentVideoSrc.data} drone={currentVideoSrc.drone}  />
            </div>

            <div id="map">
              <Map/>
            </div>

            <div id="player">
                
              {currentVideoSrc.src ? (
                <video id="playerr" ref={videoRef} src={currentVideoSrc.src} controls autoPlay />
              ) : (
                <img  id = "playerr" src={placeholderImg} alt=" "  />
              )}
              
            </div>

            <div id="widget">
              <Widget  onVideoSelect={handleVideoSelect} />
            </div>

            <div id="bottom-timeline">
              <TimeLineHome data={currentVideoSrc.data} />
            </div>

       </div>
    </>
    // <div className="homepage">
    //   <div id="widgett">
    //     <div id="widget">
    //       <Widget  onVideoSelect={handleVideoSelect} />
    //      </div> 
    //    </div>
       
      
      //  {currentVideoSrc.src ? (
      //   <video id="player" ref={videoRef} src={currentVideoSrc.src} controls autoPlay />
      // ) : (
      //   <img  id = "player" src={placeholderImg} alt=" "  />
      // )}
      
     
    //   <div id="picture">
    //     <Map/>

    //   </div>
      
     

    //   <RightSideBar videoRef={videoRef} data={currentVideoSrc.data} drone={currentVideoSrc.drone}  />
      
    //   <div id= "bottom-timeline">
    //   <TimeLineHome data={currentVideoSrc.data} />

    //   </div>
      
    // </div>
  );
};

export default Home;
