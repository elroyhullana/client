import React from 'react'
import { Button } from "@mui/material";

import NavBar from './../Components/navbar/Navbar';

import './../CSS/XS.css'

const RecentWorks = () => {
  return (
    <div>
      <NavBar />

      <section className='contentWorks'>
        <div className='workArea'>
          <div className='recentCard'>
            <img
              src="/works/checkuppoint.png"
              alt="headerLogo"
            />

            <div className='worktext'>
              <p>
                WEB AND MOBILE
              </p>
              <h1>
                CheckUppoint
              </h1>
              <p>
                CheckUppoint is a web application that enable patients of QWUDC to book an appointment online at their preferred time and date.
              </p>
            </div>

            <div className='viewButton'>
              <Button>
                <a
                  href='https://the-checkuppoint-app.vercel.app'
                  style={{ textDecoration: "none", color: "#563727" }}
                >
                  View Site
                </a>
              </Button>
            </div>
          </div>

          <div className='recentCard'>
            <img
              src="/works/TRAVEL.png"
              alt="headerLogo"
            />

            <div className='worktext'>
              <p>
                WEB
              </p>
              <h1>
                tRAVEl
              </h1>
              <p>
                tRAVEl is a web application that features RAVE reviews of Lucena City in Quezon, Philippines. It includes the City's History, Famous Foods and Tourist Spots.
              </p>
            </div>

            <div className='viewButton'>
              <Button>
                <a
                  href='https://t-rave-l-app.vercel.app'
                  style={{ textDecoration: "none", color: "#563727" }}
                >
                  View Site
                </a>
              </Button>
            </div>

          </div>

          <div className='recentCard'>
            <img
              src="/works/STRACK.png"
              alt="headerLogo"
            />

            <div className='worktext'>
              <p>
                WEB
              </p>
              <h1>
                STrack
              </h1>
              <p>
                STrack is an inventory system for Nigella Clothing Store located in Lucena City. This web application enables the owner to efficiently track and manage their inventory levels. Further, they can create, retrieve, delete and update their stock records. It also features easy tracking and management of sales.
              </p>
            </div>

          </div>

          <div className='recentCard'>
            <img
              src="/works/FIT-X.png"
              alt="headerLogo"
            />

            <div className='worktext'>
              <p>
                WEB
              </p>
              <h1>
                Fit-X
              </h1>
              <p>
                Fit-X is a workout manager web application designed to monitor and elevate the fitness journey of its users. This system streamlines workout planning with organized routines and efficient progress tracking, ensuring a well-structured and motivating experience.
              </p>
            </div>

          </div>
        </div>
      </section>

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

export default RecentWorks
