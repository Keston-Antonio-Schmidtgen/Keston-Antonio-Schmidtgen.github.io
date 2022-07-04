

import React from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "./Navigation";
import PersonalWebsiteRoute from "./PersonalWebsiteRoute";




export default function PersonalWebsite() {
    return (

        <div>
        
   <Navigation/>
   
   <Routes>
   <Route path="/" element={<PersonalWebsiteRoute/>} />
   
    </Routes>
   
        </div>
    
    )
}