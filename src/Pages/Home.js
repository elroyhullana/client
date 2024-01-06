import React, { useEffect } from 'react'
import NavBar from './../Components/navbar/Navbar';
import EmailForm from './../Components/EmailForm';

import './../CSS/XS.css'
import './../CSS/S.css'
import './../CSS/M.css'
import './../CSS/L.css'
import './../CSS/XL.css'

const Home = () => {
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Attach event listener for scrolling
    useEffect(() => {
        window.onscroll = function () {
            // Show the button when the user scrolls down 20px from the top
            const btn = document.getElementById('myBtn');
            if (btn) {
                btn.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 'block' : 'none';
            }
        };
    }, []);

    return (
        <div className='body'>
            <NavBar />

            <button onClick={topFunction} id="myBtn" title="Go to top">
                <img
                src='/icons/arrow.png'
                alt='arrow'
                />
            </button>

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

            <section className='bgIntro' />

            <section className='bio' id='bio'>
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

            <section className='bodyContent' id='bodyContent'>
                <div className='worksTitle'>
                    <h1>RECENT WORKS</h1>
                </div>

                <div className='works'>
                    <div className='workCard'>
                        <img
                            src='/works/checkuppoint-removed.png'
                            alt="workPicture"
                        />
                        <p className="workCategory">Web and Mobile Development</p>
                        <p className='workTitle'>
                            CheckUppoint
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/strack-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Web Development</p>
                        <p className='workTitle'>
                            STrack
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/travel-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Web Development</p>
                        <p className='workTitle'>
                            tRAVEl
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/fit-x-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Web Development</p>
                        <p className='workTitle'>
                            Fit-X
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/curall-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Web and Mobile Prototype</p>
                        <p className='workTitle'>
                            CURALL
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/aquariadepot-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Web Object Oriented Application</p>
                        <p className='workTitle'>
                            AquariaDepot
                        </p>
                    </div>

                    <div className='workCard'>
                        <img
                            src='/works/geomaps-removed.png'
                            alt="workPicture"
                        />

                        <p className="workCategory">Mobile Prototype</p>
                        <p className='workTitle'>
                            GeoMaps
                        </p>
                    </div>
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

            <section className='quote'>
                <h1>"𝕃𝕚𝕧𝕚𝕟𝕘 𝕠𝕟 𝕥𝕙𝕖 𝕖𝕕𝕘𝕖 𝕚𝕤 𝕨𝕙𝕖𝕟 𝕪𝕠𝕦 𝕕𝕖𝕔𝕚𝕕𝕖 𝕟𝕠𝕥 𝕥𝕠 𝕦𝕤𝕖 𝕧𝕖𝕣𝕤𝕚𝕠𝕟 𝕔𝕠𝕟𝕥𝕣𝕠𝕝 𝕗𝕠𝕣 𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒𝕝 𝕡𝕣𝕠𝕛𝕖𝕔𝕥."</h1>
            </section>

            <section className='contactMeArea' id='contactMeArea'>
                <div className='contact-card'>
                    <h1>ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕄𝕖</h1>
                    <EmailForm />
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
