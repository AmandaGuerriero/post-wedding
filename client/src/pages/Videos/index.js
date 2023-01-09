import React from 'react';
import Tabs from "../../components/Tabs"; 
import './style.css';


const Videos = (props) => {
  return (
    <main>
       <div className="button-area">
        <a href="https://youtube.com/playlist?list=PLFYHmoT9Rj6ursjN2V1kCqbr_1ztCGH0o" target="_blank"><button className="youtube-videos" onclick="https://youtube.com/playlist?list=PLFYHmoT9Rj6ursjN2V1kCqbr_1ztCGH0o">View all videos on Youtube</button></a>
      </div>
      <Tabs> 
      <div label="Ceremony"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Get4M7Z8oNA"></iframe>
          </div>
       </div> 
      <div label="First Dance"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/yd4A_j1flMo"></iframe>
          </div>
       </div>
      <div label="Toasts"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/e-k1D7GtxOg"></iframe>
          </div>
       </div>
       <div label="Dancing"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/NjkYIb7Qvbs"></iframe>
          </div>
       </div>
       <div label="Eric & Amanda"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/TuRQmkbD38Q"></iframe>
          </div>
       </div>
       <div label="Guests"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/ItCbJDdhH4E"></iframe>
          </div>
       </div>
       <div label="Details"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/FAKdnx1vfXA"></iframe>
          </div>
       </div>
       <div label="The Twist"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/7ut2RhJOcoQ"></iframe>
          </div>
        </div> 
       <div label="Proud Mary"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/X-F15Fpr_KY"></iframe>
          </div>
       </div>
     </Tabs> 
    </main>
    
  );
};

export default Videos;
