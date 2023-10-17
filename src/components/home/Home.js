import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubCat from '/home/dorado/workspace/personal-site/src/images/github-mark-white.png'
import BlackGitHubCat from '/home/dorado/workspace/personal-site/src/images/github-mark-black.png'
import LinkedInSquare from '/home/dorado/workspace/personal-site/src/images/linked-in-square.png'
import BlackNGold from '/home/dorado/workspace/personal-site/src/images/black-n-gold.jpg'
import WelcomeQK from '/home/dorado/workspace/personal-site/src/images/qk/qk welcome.png'
import WelcomeSOL from '/home/dorado/workspace/personal-site/src/images/sol/sol-main.png'
import HTMLIcon from '/home/dorado/workspace/personal-site/src/images/skillset/html.png'
import CSSIcon from '/home/dorado/workspace/personal-site/src/images/skillset/css.png'
import JSIcon from '/home/dorado/workspace/personal-site/src/images/skillset/js.webp'
import ReactIcon from '/home/dorado/workspace/personal-site/src/images/skillset/React.png'
import PythonIcon from '/home/dorado/workspace/personal-site/src/images/skillset/python.png'
import SQLIcon from '/home/dorado/workspace/personal-site/src/images/skillset/sql.png'
import TailwindIcon from '/home/dorado/workspace/personal-site/src/images/skillset/tailwind.png'
import DjangoIcon from '/home/dorado/workspace/personal-site/src/images/skillset/dj.png'
import YouTubeIcon from '/home/dorado/workspace/personal-site/src/images/icon-youtube.png'
import EMailIcon from '/home/dorado/workspace/personal-site/src/images/icon-email.webp'
import PhoneIcon from '/home/dorado/workspace/personal-site/src/images/icon-phone.webp'
import MapIcon from '/home/dorado/workspace/personal-site/src/images/icon-map.webp'
import LinkIcon from '/home/dorado/workspace/personal-site/src/images/icon-link.png'

export const Home = () =>{
    
const navigate = useNavigate()

    var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    var current = 0;
    
    var keyHandler = function (event) {
    
        // If the key isn't in the pattern, or isn't the current key in the pattern, reset
        if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
            current = 0;
            return;
        }
    
        // Update how much of the pattern is complete
        current++;
    
        // If complete, alert and reset
        if (pattern.length === current) {
            current = 0;
            navigate("/Quiz")
        }
    
    };



    return(<>

    <section className= " min-h-screen bg-cover bg-center bg-fixed p-10" style={{ backgroundImage: `url(${BlackNGold})` }} >

        <br/> <br/> 

            <article className=" bg-gray-700 p-10  bg-cover bg-center rounded-xl text-yellow-500">
                <div className="flex justify-center flex-col items-center">
                    <p className=" text-6xl mb-6 pt-2">Ely Dorado </p>            
                    <p className=" text-4xl ">Software Developer</p>
                </div>

                <section className="flex justify-evenly pt-8">
                        <a href="https://www.linkedin.com/in/ely-dorado/" target="_blank" rel="noreferrer" className="flex items-center"> <img src={LinkedInSquare} alt="LinkedIn logo" className="w-8 pb-2 mr-2"/> Ely Dorado </a>
                        <a href="https://github.com/El-Dorado17" target="_blank" rel="noreferrer" className="flex items-center"> <img src={GitHubCat} alt="github cat" className="w-8 pb-2 mr-2"/> El-Dorado17 </a>
                        <a href="mailto:2018dorado@gmail.com" className="text-blue-500 pb-2 flex items-center"> <img src={EMailIcon} alt='email icon' className="w-8 mr-2"/> 2018dorado@gmail.com</a>
                        <a href="tel:+1234567890" className="pb-2 flex items-center"> <img src={PhoneIcon} alt='phone icon' className="w-8 mr-2"/> (615) 294-6390</a>
                        <a href="https://www.google.com/maps/place/St.+Louis+Metropolitan+Area/@38.7560177,-91.597838,8z/data=!3m1!4b1!4m6!3m5!1s0x87df333ece73e09d:0xbae7aa3e7b366814!8m2!3d38.8196814!4d-90.4502368!16zL20vMDJ2M203?authuser=0&entry=ttu" target='_blank'  rel="noreferrer" className="pb-2 flex items-center"> <img src={MapIcon} alt='map icon' className="w-8 mr-2"/> Greater St. Louis Area</a>
                </section>
            </article>

        <br/>

        <article className=" bg-gray-700 p-10  bg-cover bg-center rounded-xl text-yellow-500">
            <p className=" text-3xl mb-6 flex justify-center">MY SKILLSET </p>
            <section className="flex justify-evenly ">
                    <img src={ReactIcon} title="React" alt="React Icon" className="h-10"/>
                    <img src={JSIcon} title="JavaScript" alt="JavaScript Icon" className="h-14"/>
                    <img src={HTMLIcon} title="Hyper-Text Markup Language" alt="HTML Icon" className="h-12 pt-1"/>
                    <img src={CSSIcon} title="Cascading Style Sheets" alt="CSS Icon" className="h-12"/>
                    <img src={TailwindIcon} title="Tailwind CSS Framework" alt="Tailwind CSS Icon" className="h-8 pt-1"/>
                    <img src={SQLIcon} title="SQL" alt="SQL Icon" className="h-12"/>
                    <img src={PythonIcon} title="Python" alt="Python Icon" className="h-12"/>
                    <img src={DjangoIcon} title="Django" alt="Django Icon" className="h-12"/>
            </section>
        </article>

        <br/>  



        <article className="bg-gray-700  p-4 text-yellow-500 rounded-xl" >
            <p className=" flex justify-center text-3xl pb-2">PROJECTS</p>

            <div className="p-2">
                <div>
                <section className="flex justify-between ">
                    <div className="w-1/3">
                        <a  target="_blank" rel="noreferrer" className="text-3xl flex justify-center underline">Quest Keeper</a>
                        <h3>Tech Used: JavaScript & React, JSON Server, HTML, Tailwind-CSS</h3>
                        <p>QK is a full CRUD application that allows users to track their video game progress.</p>
                        
                    </div>
                    <div className="border-solid border-2 border-yellow-500 w-4/6">
                        <img src={WelcomeQK} alt="pic of the proj"/>
                    </div>
                </section>
                
                <section className="flex justify-end pb-6"> 
                    <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a> 
                    <img src={BlackGitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Repository</a>
                    <img src={LinkIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://quest-keeper-6cymc.ondigitalocean.app/register' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Deplopyed Project</a>
                </section>
                </div>

                <div>
                <section className="flex justify-between ">
                <div className="w-1/3">
                        <h1  className="text-3xl text-center underline">Study Other Languages (S.O.L.)</h1>
                        <h3>Tech Used: JavaScript, React, JSON Server, HTML, CSS</h3>
                        <p>SOL was my first project I made to show my knowledge of front-end tech. JSON Server handles  pb-6requests. Create ands Delete only, video, and deployed </p>
                    </div>
                    <div className="border-solid border-2   border-yellow-500 w-4/6">
                        <img src={WelcomeSOL} alt="pic of the proj"/>
                    </div>
                </section>

                <section className="flex justify-end pb-6"> 
                    <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://youtu.be/3k0GS7kY3yU' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a> 
                    <img src={BlackGitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Repository</a>
                    <img src={LinkIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://quest-keeper-6cymc.ondigitalocean.app/register' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Deplopyed Project</a>
                </section>
                </div>

                <section className="flex justify-between ">
                <div className="w-1/3 ">
                        <h1 className="text-3xl text-center underline">Vacation Station</h1>
                        <h3>Tech Used: JavaScript & React, Python & Django, SQLite, HTML & CSS</h3>
                        <p>Vacation Station is my first full-stack application with full CRUD functionality</p>
                        
                    </div>
                    <div className="border-solid border-2 border-gray-900">
                        <img src="" alt="pic of the proj"/>
                        *pic goes here*
                    </div>
                </section>
                <p className="flex justify-end pb-6"> *links to code, video, and deployed*</p>
            </div>
        </article>

        <br/>

        <article className="bg-gray-700 text-yellow-500 p-10 rounded-xl" >
            <p className="flex justify-center text-3xl pb-8">EXPERIENCE</p>
                <div className="flex justify-evenly"> 
                <section className="w-80"> 
                        <div>
                            <h1>Nashville Software School</h1>
                            <h2>Junior Developer</h2>
                            <h4>January 2023 - June 2023</h4>
                            <ul>
                                <li>‣ Full-time, six month software development bootcamp focusing on JavaScript/React & Python/Django development fundamentals and problem solving</li>
                                <li>‣ Created single & multi-page applications</li>
                                <li>‣ Project management/tracking with GitHub project boards and issue tracking source code/version control with Git/GitHub</li>
                                <li>‣ Solution Design: white-boarding & wireframes </li>
                                <li>‣ Created RESTful API's with Django REST framework </li>
                                <li>‣ Retrieved and stored database information with SQLite </li>
                            </ul>
                        </div>
                    </section>

                    <section className="w-80"> 
                        <div> 
                            <h1>Dal-Tile Corporation</h1>
                            <h2>Operator & Technician</h2>
                            <h4>September 2021 - December 2022</h4>
                            <ul>

                                <p>OPERATOR</p>
                                <li>‣ Set new production record among all 4 shifts within four months of start date </li>
                                <li>‣ Maintained machinery as needed for optimal production rate </li>
                                <li>‣ Checked finished products for correct labeling, presentation, and quantities </li>

                                <p>TECHNICIAN</p>
                                <li>‣ Operated front-end-loader to keep raw material ready for production </li>
                                <li>‣ Frequently tested slip & finished powder to verify product satisfiesQ.C. Standards </li>
                                <li>‣ Stopped and restarted Ball-Mill & Spray-Dryer for cleaning, mechanical-assessment, and routine maintenence</li>

                            </ul>
                        
                        </div>
                    </section>
                </div>
        </article>

        {document.addEventListener('keydown', keyHandler, false)}
    </section>
        </>
    )
}