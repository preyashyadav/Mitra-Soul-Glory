import React from 'react'
import cover from "../images/cover1.jpg"
import introVid from "../videos/frnds3.mp4"
import "./pages.css"

const Home = () => {
    return (
        <div>
            <div class="intro">
            <div class="bg-video">
                <video src={introVid} loop muted autoPlay></video>  
                <img src={cover} alt="" />
            </div>
            <div class="intro-head">
                <div id="intro-head">
                      Mitra
                </div>
            </div>   
        </div>
        </div>
    )
}

export default Home
