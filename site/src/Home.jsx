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
                <div style = {{fontweight:"bold",fontSize:"110%"}}>
                    This is the Home Page
                </div>
                <p>
                    Welcome to your new page!
                </p>
            <EventsList />
        </>
    );
};

export default Home;