import React from 'react';
import Tabs from "../components/Tabs"; 
import WelcomePhotos from "../components/WelcomePhotos";
import WeddingPhotos from "../components/WeddingPhotos";
import Videos from "./Videos";
import Photos from "./Photos";
import HoneymoonPhotos from '../components/Honeymoon';


const Home = (props) => {
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
      <Tabs> 
      <div label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"> 
         <Photos />
       </div> 
       {/* <div label="Honeymoon"> 
         <HoneymoonPhotos />
       </div> 
      <div label="Welcome Event"> 
         <WelcomePhotos />
       </div>  */}
       <div label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Videos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"> 
         <Videos />
       </div> 
     </Tabs> 
    </main>
    
  );
};

export default Home;
