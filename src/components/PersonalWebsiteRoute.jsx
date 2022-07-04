import React from "react";
import Header from './Header';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Experience from './Experience';
import Projects from './Projects';


export default function PersonalWebsiteRoute() {
    return (

        <div>
        <Header />
    <AboutMe />
    <Experience />
    <Projects />
    <ContactMe />
    <Footer/>
        </div>
    
    )
}