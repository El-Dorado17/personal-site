import React from "react";
//import { useNavigate } from "react-router-dom";
import GitHubCat from '../../images/github-mark-white.png'
import BlackGitHubCat from '../../images/github-mark-black.png'
import LinkedInSquare from '../../images/linked-in-square.png'
import BlackNGold from '../../images/black-n-gold.jpg'
import WelcomeQK from '../../images/qk/qk welcome.png'
import WelcomeSOL from '../../images/sol/sol-main.png'
import HTMLIcon from '../../images/skillset/html.png'
import CSSIcon from '../../images/skillset/css.png'
import JSIcon from '../../images/skillset/js.webp'
import ReactIcon from '../../images/skillset/React.png'
import PythonIcon from '../../images/skillset/python.png'
import SQLIcon from '../../images/skillset/sql.png'
import TailwindIcon from '../../images/skillset/tailwind.png'
import DjangoIcon from '../../images/skillset/dj.png'
import YouTubeIcon from '../../images/icon-youtube.png'
import EMailIcon from '../../images/icon-email.webp'
import PhoneIcon from '../../images/icon-phone.webp'
import MapIcon from '../../images/icon-map.webp'
import LinkIcon from '../../images/icon-link.png'

export const Home = () =>{
    
//const navigate = useNavigate()

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
            alert('Now tracking this computers location...')
            alert('Just kidding! Check back at a later time :)')
        }
    
    };



    return(<>

    <section className= " bg-cover bg-center bg-fixed p-5 md:p-10" style={{ backgroundImage: `url(${BlackNGold})` }} >

        <br/> <br/> 

            <article className="bg-gray-700 p-5 md:p-10 rounded-xl text-yellow-500">
                <div className="flex justify-center flex-col items-center">
                    <p className=" text-6xl mb-6 pt-2">Ely Dorado </p>            
                    <p className=" text-4xl ">Software Developer</p>
                </div>

                <section className="flex justify-evenly pt-8">
                        <a href="https://www.linkedin.com/in/ely-dorado/" target="_blank" rel="noreferrer" className="flex items-center" title='Connect with me on Linked-In'> <img src={LinkedInSquare} alt="LinkedIn logo" className="w-8 pb-2 mr-2" /> Ely Dorado </a>
                        <a href="https://github.com/El-Dorado17" target="_blank" rel="noreferrer" className="flex items-center" title='Frequently coding on GitHub!'> <img src={BlackGitHubCat} alt="github cat" className="w-8 pb-2 mr-2"/> El-Dorado17 </a>
                        <a href="mailto:2018dorado@gmail.com" className="pb-2 flex items-center" title='Drop me a line!'> <img src={EMailIcon} alt='email icon' className="w-8 mr-2"/> 2018dorado@gmail.com</a>
                        <a href="tel:+1234567890" className="pb-2 flex items-center" title='Reach out! (I still play iMessage games!)'> <img src={PhoneIcon} alt='phone icon' className="w-8 mr-2"/> (615) 294-6390</a>
                        <a href="https://www.google.com/maps/place/St.+Louis+Metropolitan+Area/@38.7560177,-91.597838,8z/data=!3m1!4b1!4m6!3m5!1s0x87df333ece73e09d:0xbae7aa3e7b366814!8m2!3d38.8196814!4d-90.4502368!16zL20vMDJ2M203?authuser=0&entry=ttu" target='_blank'  rel="noreferrer" title='western IL, open to relocation!' className="pb-2 flex items-center"> <img src={MapIcon} alt='map icon' className="w-8 mr-2"/> Greater St. Louis Area</a>
                </section>
            </article>

        <br/> <br/>

        <article className=" bg-gray-700 p-5 md:p-10 rounded-xl text-yellow-500">
            <p className=" text-3xl mb-6 flex justify-center">SKILLSET </p>
            <section className="flex justify-evenly ">
                    <img src={ReactIcon} title="React; This page is built with React! " alt="React Icon" className="h-10"/>
                    <img src={JSIcon} title="JavaScript" alt="JavaScript Icon" className="h-14"/>
                    <img src={HTMLIcon} title="Hyper-Text Markup Language; my favorite non-programming language currently" alt="HTML Icon" className="h-12 pt-1"/>
                    <img src={CSSIcon} title="Cascading Style Sheets" alt="CSS Icon" className="h-12"/>
                    <img src={TailwindIcon} title="Tailwind CSS Framework" alt="Tailwind CSS Icon" className="h-8 pt-1"/>
                    <img src={SQLIcon} title="SQL; fun fact: I LOVE SQL. CSV files are a hoot!" alt="SQL Icon" className="h-12"/>
                    <img src={PythonIcon} title="Python; I've used python to make Discord bots too!" alt="Python Icon" className="h-12"/>
                    <img src={DjangoIcon} title="Django" alt="Django Icon" className="h-12"/>
            </section>
        </article>

        <br/>  <br/>



        <article className="bg-gray-700 text-yellow-500 p-5 md:p-10 rounded-xl" >
            <p className=" flex justify-center text-3xl pb-2">PROJECTS</p>

            <div className="p-2">
                <div>
                <section className="flex justify-between ">
                    <div className="w-1/3 mr-2">
                        <h1 className="text-2xl flex justify-center font-semibold">Quest Keeper</h1>
                        <br/>
                        <p className="text-xl font-semibold">Tech Used</p>
                        <p className="">JavaScript, React, JSON Server, HTML, & Tailwind-CSS</p>
                        <p>★ Favorite Feature: Tailwind CSS Integration!</p>
                        <br/>
                        <p className="text-xl font-semibold">Description</p>
                        <p className="mt-2">» Quest Keeper is an application with full Create, Read, Update, and Delete features I made for my friends and I that allows users to track their video game progress.</p>
                        <p className="mt-2">» Users can create a post with information about a video game they'd like to track (platform, title, notes, etc.), see other user posts, as well as edit or delete their own. </p>
                        {/* <p className="mt-2">» Check out the video for a detailed demonstration!</p> */}
                        
                    </div>
                    <div className="w-4/6">
                        <img src={WelcomeQK} alt="pic of the proj"/>
                    </div>
                </section>
                
                <section className="flex justify-end pb-6 mt-2"> 
                    {/* <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a>  */}
                    <img src={GitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://github.com/El-Dorado17/quest-keeper' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Repository</a>
                    <img src={LinkIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://quest-keeper.vercel.app/register' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Deployed Project</a>
                </section>
                </div>

                <div>
                <section className="flex justify-between ">
                <div className="w-1/3 mr-2">
                        <h1  className="text-2xl text-center font-semibold">Study Other Languages (S.O.L.)</h1>
                        <br/>
                        <p className="text-xl font-semibold">Tech Used</p>
                        <p className="">JavaScript, React, JSON Server, HTML, CSS</p>
                        <p>★ Favorite Feature: Background video & CSS Flip-Card implementation!</p>
                        <br/>
                        <p className="mt-2">» SOL is an appplication I made to help my wife study Spanish</p>
                        <p className="mt-2">» With SOL, Mentors can create and delete flashcards for Pupils to study, while Pupils can only view flashcards and filter them by category</p>
                    </div>
                    <div className="w-4/6">
                        <img src={WelcomeSOL} alt="pic of the proj"/>
                    </div>
                </section>

                <section className="flex justify-end pb-6 mt-2"> 
                    <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://youtu.be/3k0GS7kY3yU' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a> 
                    <img src={GitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://github.com/El-Dorado17/study-other-languages' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Repository</a>
                </section>
                </div>
                </div>

                {/* <div>
                    <section className="flex justify-between ">
                        <div className="w-1/3 mr-2">
                            <a  target="_blank" rel="noreferrer" className="text-3xl flex justify-center underline font-semibold">Vacation Station</a>
                            <p className="text-xl font-semibold">Tech Used</p>
                            <p className="">JavaScript, React, Python, Django, HTML, CSS</p>

                            <br/>

                            <p className="text-xl font-semibold">Description</p>
                            <p className="mt-2">» text</p>
                            <p className="mt-2">» text</p>
                            <p className="mt-2">» text</p>    
                        </div>
                        <div className="border-solid border-2 border-yellow-500 w-4/6">
                            <img src={WelcomeQK} alt="pic of the proj"/>
                        </div>
                    </section>

                    <section className="flex justify-end pb-6 mt-2"> 
                        <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a> 
                        <img src={GitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://github.com/El-Dorado17/quest-keeper' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Repository</a>
                        <img src={LinkIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://quest-keeper-6cymc.ondigitalocean.app/register' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Deployed Project</a>
                    </section>
                </div> */}
        </article>

        <br/> <br/>

        <article className="bg-gray-700 text-yellow-500 p-10 rounded-xl" >
            <p className="flex justify-center text-3xl pb-8">EXPERIENCE</p>
                <div className="flex justify-evenly"> 
                <section className="w-80 "> 
                        <div>
                            <h1 className="text-xl font-semibold">Nashville Software School</h1>
                            <h2 className="text-l font-semibold">Junior Developer</h2>
                            <h4 >January 2023 - June 2023</h4>
                            <br/>
                            <ul>
                                <li  className="mt-2">‣ Full-time, six month software development bootcamp focusing on JavaScript/React & Python/Django development fundamentals and problem solving</li>
                                <li  className="mt-2">‣ Created single & multi-page applications</li>
                                <li  className="mt-2">‣ Project management/tracking with GitHub project boards and issue tracking source code/version control with Git/GitHub</li>
                                <li  className="mt-2">‣ Solution Design: white-boarding & wireframes </li>
                                <li  className="mt-2">‣ Created RESTful API's with Django REST framework </li>
                                <li  className="mt-2">‣ Retrieved and stored database information with SQLite </li>
                            </ul>
                        </div>
                    </section>

                    <section className="w-80"> 
                        <div> 
                            <h1 className="text-xl font-semibold">Dal-Tile Corporation</h1>
                            <h2 className="text-l font-semibold">Operator & Technician</h2>
                            <h4>September 2021 - December 2022</h4>
                            <br/>
                            <ul>

                                <p className="text-l font-semibold">OPERATOR</p>
                                <li  className="mt-2">‣ Set new production record among all 4 shifts within four months of start date </li>
                                <li  className="mt-2">‣ Maintained machinery as needed for optimal production rate </li>
                                <li  className="mt-2">‣ Checked finished products for correct labeling, presentation, and quantities </li>

                                <br/>

                                <p className="text-l font-semibold">TECHNICIAN</p>
                                <li  className="mt-2">‣ Operated front-end loader to keep raw material ready for production </li>
                                <li  className="mt-2">‣ Tested slip & finished powder hourly to ensure Q.C. Standard satisfaction </li>
                                <li  className="mt-2">‣ Shut down Ball-Mill and Spray-Dryer as needed for cleaning, mechanical-assessment, and routine maintenence</li>

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