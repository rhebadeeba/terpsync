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
                <div style = {{fontWeight:"bold",fontSize:"110%"}}>
                    Welcome to TerpSync
                </div>
                <div style = {{fontWeight:"bold",fontSize:"110%"}}>
                    Please select your events
                </div>
            <EventsList />
        </>
    );
};

export default Home;