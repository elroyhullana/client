import React, { useEffect } from 'react'
import NavBar from './../Components/navbar/Navbar';
import EmailForm from './../Components/EmailForm';

import './../CSS/XS.css'
import './../CSS/S.css'
import './../CSS/M.css'
import './../CSS/L.css'
import './../CSS/XL.css'
import ConveyorBelt from '../Components/ConveyerBelt';

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
            <ConveyorBelt />

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
                <h1>"𝙇𝙞𝙫𝙞𝙣𝙜 𝙤𝙣 𝙩𝙝𝙚 𝙚𝙙𝙜𝙚 𝙞𝙨 𝙬𝙝𝙚𝙣 𝙮𝙤𝙪 𝙙𝙚𝙘𝙞𝙙𝙚 𝙣𝙤𝙩 𝙩𝙤 𝙪𝙨𝙚 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙤𝙣 𝙮𝙤𝙪𝙧 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝙥𝙧𝙤𝙟𝙚𝙘𝙩."</h1>
            </section>

            <section className='contactMeArea' id='contactMeArea'>
                <div className='contact-card'>
                    <h1>𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙈𝙀</h1>
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
