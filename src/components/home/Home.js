import React from "react";
//import { useNavigate } from "react-router-dom";
//import LinkIcon from '../../images/icon-link.png'
import GitHubCat from '../../images/github-mark-white.png'
import BlackGitHubCat from '../../images/github-mark-black.png'
import LinkedInSquare from '../../images/linked-in-square.png'
// import BlackNGold from '../../images/black-n-gold.jpg' //to use: style={{ backgroundImage: `url(${BlackNGold})` }}
import HTMLIcon from '../../images/skillset/html.png'
import CSSIcon from '../../images/skillset/css.png'
import JSIcon from '../../images/skillset/js.webp'
import ReactIcon from '../../images/skillset/React.png'
import PythonIcon from '../../images/skillset/python.png'
import SQLIcon from '../../images/skillset/sql.png'
import TailwindIcon from '../../images/skillset/tailwind.png'
import DjangoIcon from '../../images/skillset/dj.png'
import EMailIcon from '../../images/icon-email.webp'
import PhoneIcon from '../../images/icon-phone.webp'
import MapIcon from '../../images/icon-map.webp'
import Resume from '../resume/Ely Dorado.pdf'
import QKVid from '../../images/qk/demo.mp4'
import SOLVid from '../../images/sol/sol-demo.mp4'

export const Home = () =>{
    
//const navigate = useNavigate()

    // var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    // var current = 0;
    
    // var keyHandler = function (event) {
    
    //     // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    //     if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    //         current = 0;
    //         return;
    //     }
    
    //     // Update how much of the pattern is complete
    //     current++;
    
    //     // If complete, alert and reset
    //     if (pattern.length === current) {
    //         current = 0;
    //         alert('Now tracking this computers location...')
    //         alert('Just kidding! Check back at a later time :)')
    //     }
    
    // };



    return(<>

    <section className= " bg-cover bg-center bg-fixed p-5 md:p-10 bg-gradient-to-l from-gray-500 to-black"  >

        <br/> <br/> 

            <article className="bg-gray-700 pt-2 md:p-6 rounded-xl text-yellow-500">
                <div className="flex justify-center flex-col items-center">
                    <p className=" text-6xl mb-6 pt-2">Ely Dorado </p>            
                    <p className=" text-4xl ">Software Developer</p>
                </div>

                <section className="flex flex-col md:flex-row justify-center items-center md:justify-evenly pt-6 md:pt-8">
                    <div className="pb-2 flex items-center hover:underline">
                        <img src={LinkedInSquare} alt="LinkedIn logo" className="w-8 pb-2 mr-2" />
                        <a href="https://www.linkedin.com/in/ely-dorado/" target="_blank" rel="noreferrer" title="Connect with me on LinkedIn">Ely Dorado</a>
                    </div> 
                    <div className="pb-2 flex items-center hover:underline">
                        <img src={BlackGitHubCat} alt="github cat" className="w-8 pb-2 mr-2" />
                        <a href="https://github.com/El-Dorado17" target="_blank" rel="noreferrer" title="Frequently coding on GitHub!">El-Dorado17</a>
                    </div> 
                    <div className="pb-2 flex items-center hover:underline">
                        <img src={EMailIcon} alt="email icon" className="w-8 pb-2 mr-2" />
                        <a href="mailto:2018dorado@gmail.com" target="_blank" rel="noreferrer" title="Drop me a line!">2018dorado@gmail.com</a>
                    </div> 
                    <div className="pb-2 flex items-center hover:underline">
                        <img src={PhoneIcon} alt="phone icon" className="w-8 pb-2 mr-2" />
                        <a href="tel:+16152946390" title="Reach out! (I still play iMessage games!)">(615) 294-6390</a>
                    </div> 
                    <div className="pb-2 flex items-center hover:underline">
                        <img src={MapIcon} alt="map icon" className="w-8 pb-2 mr-2" />
                        <a href="https://www.google.com/maps/place/St.+Louis+Metropolitan+Area/@38.7560177,-91.597838,8z/data=!3m1!4b1!4m6!3m5!1s0x87df333ece73e09d:0xbae7aa3e7b366814!8m2!3d38.8196814!4d-90.4502368!16zL20vMDJ2M203?authuser=0&entry=ttu" target="_blank" rel="noreferrer" title="western IL, open to relocation!">Greater St. Louis Area</a>
                    </div> 
                </section>

            <div className="bg-gray-700 p-4 md:p-4 rounded-xl text-yellow-500">
                <section className="flex flex-wrap justify-evenly">
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={ReactIcon} title="React; This page is built with React!" alt="React Icon" className="h-8 md:h-10" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={JSIcon} title="JavaScript" alt="JavaScript Icon" className="h-10 md:h-14" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={HTMLIcon} title="Hyper-Text Markup Language; my favorite non-programming language currently" alt="HTML Icon" className="h-8 md:h-10" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={CSSIcon} title="Cascading Style Sheets" alt="CSS Icon" className="h-10 md:h-14" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={TailwindIcon} title="Tailwind CSS Framework" alt="Tailwind CSS Icon" className="h-8 md:h-10" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={SQLIcon} title="SQL; fun fact: I LOVE SQL. CSV files are a hoot!" alt="SQL Icon" className="h-10 md:h-14" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={PythonIcon} title="Python; I've used python to make Discord bots too!" alt="Python Icon" className="h-8 md:h-10" />
                    </div>
                    <div className="w-1/2 md:w-auto flex items-center justify-center mb-4">
                        <img src={DjangoIcon} title="Django" alt="Django Icon" className="h-10 md:h-14" />
                    </div>
                </section>
                <a href={Resume} download="Ely Dorado - Resume" className="flex justify-center"> <button className="bg-gray-600 p-2 hover:bg-yellow-400 hover:text-black rounded-full"> Download Resume </button> </a>
            </div>
        </article>

        <br/>  <br/>



        <article className="bg-gray-700 text-yellow-500 p-5 md:p-10 rounded-xl" >
            <p className="text-center text-3xl pb-2 ">PROJECTS</p>

            <div className="p-2">
                <section className=" contains_the_picture_and_text">
                    <div className="w-50">
                        <h1 className="text-2xl text-center font-semibold">Quest Keeper</h1>
                        <br/>
                        <p className="text-xl font-semibold">Description</p>
                        <p className="mt-2">» Quest Keeper is an application with full Create, Read, Update, & Delete functionality to track video game progress.</p> 
                        <p className="mt-2">» Users can create a post with information about a video game they'd like to keep track of (platform, title, notes), see other user posts, as well as edit or delete their own.</p>
                        <p className="mt-2">» Created with JavaSript, React, JSON Server, Tailwind-CSS, and HTML</p>
                        <p>★ Favorite Feature: Tailwind CSS Integration & deploying to Digital-Ocean!</p>
                        <section className="flex justify-start pb-6 mt-2"> 
                            <img src={GitHubCat} alt='YouTube icon' className="h-10 mr-2 " /> <a href='https://github.com/El-Dorado17/quest-keeper' target='_blank'  rel="noreferrer" alt='video link' className="mr-2 hover:underline">Repository</a>
                            {/* <img src={LinkIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://quest-keeper.vercel.app/register' target='_blank'  rel="noreferrer" alt='video link' className="mr-2 hover:underline"> (Unfortunately, this app's free trial had a Cinderella moment and turned into a 'paid' pumpkin at midnight) </a> */}
                        </section>
                    </div>
                    <div className="flex justify-center">
                        <video src={QKVid} alt="video demonstration" className=" border border-yellow-500 rounded-xl" controls muted />
                    </div>
                </section>

                    <br/>

                <section className="">
                    <div className="w-50">
                        <h1  className="text-2xl text-center font-semibold">Study Other Languages (S.O.L.)</h1>
                        <br/>
                        <p className="text-xl font-semibold">Description</p>
                        <p className="mt-2">» SOL is an appplication I made to help my wife study Spanish</p>
                        <p className="mt-2">» With SOL, Mentors can create and delete flashcards for Pupils to study, while Pupils can only view flashcards and filter them by category</p>
                        <p className="mt-2">» Created with JavaScript, React, JSON Server, CSS, and HTML</p>
                        <p>★ Favorite Feature: Animated background & CSS Flip-Card implementation!</p>
                        <section className="flex justify-start pb-6 mt-2"> 
                            {/* <img src={YouTubeIcon} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://youtu.be/3k0GS7kY3yU' target='_blank'  rel="noreferrer" alt='video link' className="mr-2">Video Demo</a>  */}
                            <img src={GitHubCat} alt='YouTube icon' className="h-10 mr-2" /> <a href='https://github.com/El-Dorado17/study-other-languages' target='_blank'  rel="noreferrer" alt='video link' className="mr-2 hover:underline">Repository</a>
                        </section>
                    </div>
                    <div className="flex justify-center">
                        <video src={SOLVid} alt="video demonstration" className="border border-yellow-500 rounded-xl" controls muted/>
                    </div>
                </section>


    
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

        {/* <br/> <br/>
        {document.addEventListener('keydown', keyHandler, false)} */}
    </section>
        </>
    )
}