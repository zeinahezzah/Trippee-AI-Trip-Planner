import * as React from 'react';
import "./GeneralNavBar.css";
import logo from '../../Assets/logo.png'
import { Button, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import  { useState, useEffect } from 'react'



export default function GeneralNavBar(props) {
  
  const [isNavbarFixed, setIsNavbarFixed] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = isNavbarFixed
    ? 'general-navbar-container fixed-navbar'
    : 'general-navbar-container';

  return (
    <div>
      <div className={navbarClasses}>
        { <div>
      <div className="general-navbar-container">
      <div className="general-navbar-container1">
        <img
              alt="logo"
              src={logo}
              className="general-navbar-logo"
            />
        </div>

      <div className="general-navbar-container2">     
      <Box marginTop={2} marginRight={8} >
      <Button variant="text" style = {{ borderRadius: 20, marginLeft:3}} fontFamily={'Roboto'}>Home</Button>
      <Button variant="text"  style = {{ borderRadius: 20, marginLeft:3}} fontFamily={'Roboto'}>About us</Button>
      <Button variant="text"  style = {{ borderRadius: 20, marginLeft:3}} fontFamily={'Roboto'}>Contact us</Button>
      </Box>
      </div>

      
      </div>
    </div>}
      </div>
    </div>
  );
}


