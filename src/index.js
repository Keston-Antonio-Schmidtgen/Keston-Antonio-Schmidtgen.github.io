import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './components/Navigation';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
/* import Test from './components/Test'; */
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Experience from './components/Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <AboutMe />
    {/* <Test /> */}
    <Experience />
    <ContactMe />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();