import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){

    return (
        <div style = {{backgroundColor:"white"}}>
            <div style={{display:"inline-block", width:"100%",height:"100%"}}>
                <div style = {{display:"inline-block"}}>
                    <Link href={"/"} style={{}} >
                    <img src= "/assets/technica.jpg?size=400x300"/>
                    </Link>
                </div>
                <Link to="/">
                  <button>Go to Home</button>
                </Link>
                <Link to="/schedule">
                  <button>Go to Schedule</button>
                </Link>
             </div>
         </div>
    )
}