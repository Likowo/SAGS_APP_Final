import React, { Component } from 'react';
import ImageSlider from '../../ImageSlider';
import './LandingPage.module.css';
import {Howl} from "howler";

const audioTracks = [
    {
        track: "https://icons8.com/music/track/inspirational-hip-hop--media-m",
         label: "Inspirational"},
    {
        track: "https://icons8.com/music/track/summer-relax--yevhen-lokhmatov", 
        label:"Summer Relax"},
    {
        track: "https://icons8.com/music/track/calm-soul-hip-hop-beat--1", 
        label: "Calm Soul"
    }
]
class LandingPage extends Component {
   trackPlay = (src) => {
        const track = new Howl ({ src, html5: true }) // setting html5 to true;Responsible for preventing CORS error that prevents us from playing the sounds from external source
       track.play();
    }

    RenderButtonSound = () => {
        return audioTracks.map((music, index) => {  
            return(
                <button key={index} onClick={() => this.trackPlay(music.track)}>
                {music.label}
                </button>
            )
        });
    }
   render(){
        return (
            <div>       
                LandingPage
                <h2>Sounds</h2>
                { audioTracks.map((music, index) => {  
            return(
                <button key={index} onClick={() => this.trackPlay(music.track)}>
                {music.label}
                </button>
            )
        })}
                <div><ImageSlider /></div>           
            </div>
          );
    } 
}

export default LandingPage;


//////////////////////////////////////////////

{/* <span> Attribute:https://icons8.com/music/track/summer-chill-hip-hop-beat--1</span>
        <span> Attribute:https://icons8.com/music/track/calm-soul-hip-hop-beat--1</span> 
        
        https://icons8.com/music/track/summer-relax--yevhen-lokhmatov
        
        https://icons8.com/music/track/inspirational-hip-hop--media-m
        
        c:\Users\user\Downloads\inspirational-hip-hop.mp3
       */}