import React from 'react'
import './Home.css'

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
        </>
    );
};

export default Home;