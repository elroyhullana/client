import React from 'react'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import NavBar from './../Components/navbar/Navbar';

import './../CSS/XS.css'
import './../CSS/S.css'
import './../CSS/M.css'
import './../CSS/L.css'
import './../CSS/XL.css'

const Home = () => {
    return (
        <div>
            <NavBar />

            <div className='sticky'>
                <div className='sticky-content'>
                    <a href='https://www.messenger.com/t/100008061100252/'>
                        <h1>MESSAGE ME</h1>
                        <img
                            src='/icons/messenger-white.png'
                            alt='messenger'
                        />
                    </a>
                </div>
            </div>

            <section className='bgIntro'>
                <img
                    src="/Images/pattern.png"
                    alt="headerLogo"
                />
                <div className='introName'>
                    <h1>
                        HI, I AM EL ROY<br />
                        A FRONT-END DEVELOPER
                    </h1>
                    <p>
                        My mission is to design and develop<br />
                        a website that will be loved by you.
                    </p>
                </div>
            </section>

            <section className='bio'>
                <div className='bio-container'>
                    <img
                        src="/Images/my-pic.png"
                        alt="headerLogo"
                    />

                    <p>
                        <h1>MY BIO</h1>
                        In the wild jungles of Lucena City, There lived a caveman named El Roy,<br />
                        I was dubbed as the Tarzan of HTML, swinging from one branch of divs <br />
                        to another, with the grace of a gazelle and the determination of a warrior! <br />
                        My keyboard is my mighty sword, and my mouse is my trusty shield.<br />
                        Legend has it that I once defeated an entire <br />
                        horde of bugs with a single keystroke – they never saw it coming!
                    </p>
                </div>
            </section>

            <section className='content'>
                <div className='imageContainer'>
                    <img
                        src="/icons/checkuppoint.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/fit-X.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/TRAVEL LOGO.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/strackLogo.png"
                        alt="headerLogo"
                    />
                </div>
            </section>

            <section className='bodyContent'>
                <div className='worksTitle'>
                    <h1>SOME OF MY WORKS</h1>
                </div>

                <div className='works'>
                    <div className='workCard'>
                        <img
                            src='/Images/checkuppoint-preview.png'
                            alt="workPicture"
                        />
                        <p>
                            CheckUppoint
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/Images/strack-preview.png'
                            alt="workPicture"
                        />
                        <p>
                            STrack
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/Images/travel-preview.png'
                            alt="workPicture"
                        />
                        <p>
                            tRAVEl
                        </p>
                    </div>
                </div>

                <div className='viewButton'>
                    <Button>
                        <Link
                            to="/recentworks"
                            style={{ textDecoration: "none", color: "#563727" }}
                        >
                            VIEW MORE WORKS
                        </Link>
                    </Button>
                </div>
            </section>

            <section className='content'>
                <div className='imageContainer'>
                    <img
                        src="/icons/figma.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/react.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/css-3.png"
                        alt="headerLogo"
                    />

                    <img
                        src="/icons/xd.png"
                        alt="headerLogo"
                    />
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

export default Home
