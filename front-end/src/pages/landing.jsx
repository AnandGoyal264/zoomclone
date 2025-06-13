import React from 'react';
import "../App.css";
export default  function LandingPage(){
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2> Apna video Call </h2>

                </div>
                <div className="navlist">
                    <p> Join as guest</p>
                    <p> Register </p>
                    <div role="button">
                        <p> login </p>
                    </div>
                     </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                     <h1> <span style={{color:"orangered"}}> Connect</span> with your loved ones </h1>
                     <p>Cover a distance by Apna Vedio call </p>
                     <div id="sbtn" role="button">
                       <a href="/auth"> get started </a>
                       
                     </div>

                </div>
                <div> 
                    <img  id='img1' src="https://cdn.prod.website-files.com/655bd1641d5ceaa867aa2eed/65fb5db41433bbfd3f2621f9_655bd1641d5ceaa867aa2f62_section-three-_1_.webp" alt="vcimage"></img>
                </div>
            </div>
               </div>
    )
}
