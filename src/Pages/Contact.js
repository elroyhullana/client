import React from 'react'

import NavBar from './../Components/navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <NavBar />

      <section className='footer'>
        <div className='footer-logo'>
          <img
            src="/Images/HULLANA-footer.png"
            alt="headerLogo"
          />
        </div>

        <div className='socialMediaIcons'>
          <a href='https://m.facebook.com/ElroyHullana23/'>
            <img
              src="/icons/facebook.png"
              alt="headerLogo"
            />
          </a>

          <a href='https://www.instagram.com/elroy23hullana/?hl=en'>
            <img
              src="/icons/instagram.png"
              alt="headerLogo"
            />
          </a>

          <a href='https://www.linkedin.com/in/elroyhullana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
            <img
              src="/icons/linkedin.png"
              alt="headerLogo"
            />
          </a>

          <a href='https://mail.google.com/mail/?view=cm&to=hullanader23@gmail.com'>
            <img
              src="/icons/gmail-logo.png"
              alt="headerLogo"
            />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
