import React from 'react'
import './Home.css'
import EventsList from './components/EventsList.jsx'

function Home ()  {
    return (
        <>
                <div style = {{display:"inline-block}}"}}>
                    <img
                    src = "./src/assets/technica-logo.png" 
                    alt= "Image description" 
                    style={{display: "inline-block", width: "100px", height: "auto"}}
                    />
                </div>
                <div style = {{fontWeight:"bold",fontSize:"160%"}}>
                    Welcome to TerpSync!
                </div>
                <div style = {{fontWeight:"bold",fontSize:"150%"}}>
                    See events below
                </div>
                <br />
            <EventsList />
        </>
    );
};

export default Home;