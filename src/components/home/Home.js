import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubCat from '/home/dorado/workspace/personal-site/src/images/github-mark-white.png'
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

//      // Add the event listener to document
//     document.addEventListener('keydown', keyHandler, false);

//      // Remove the event listener when the component unmounts
//     return () => {
//         document.removeEventListener('keydown', keyHandler, false);
//     };
// }, [navigate]);


    return(<>
    <section className= " min-h-screen bg-cover bg-center bg-fixed p-10" style={{ backgroundImage: `url(${BlackNGold})` }} >
        <br/> <br/> 
        <article title="this is my name" className=" bg-gray-900 h-80 p-10  bg-cover bg-center flex items-center justify-center rounded-xl text-yellow-500">
            
            <div className="flex flex-col items-center">

            <p className=" text-6xl mb-6 ">Ely Dorado </p>
            
            <p className=" text-4xl ">Software Developer</p>

            </div>

            {/* <img className="absolute inset-0 object-cover" src="https://media.licdn.com/dms/image/C4D03AQFN94ndXIuFow/profile-displayphoto-shrink_400_400/0/1661618824653?e=1702512000&v=beta&t=NagxC9SaA-RWQgrliESWVczo7KLdbMJsjmNg_hDHgII" alt="pic of me"/> */}

        </article>

        <br/>
        <article title="this is my name" className=" bg-gray-900 p-10  bg-cover bg-center rounded-xl text-yellow-500">
            <p className=" text-3xl mb-6 flex justify-center">MY SKILLSET </p>
                <section className="flex justify-evenly ">
                        <img src={ReactIcon} alt="React Icon" className="h-10"/>
                        <img src={JSIcon} alt="JavaScript Icon" className="h-14"/>
                        <img src={HTMLIcon} alt="HTML Icon" className="h-12 pt-1"/>
                        <img src={CSSIcon} alt="CSS Icon" className="h-12"/>
                        <img src={TailwindIcon} alt="Tailwind CSS Icon" className="h-8 pt-1"/>
                        <img src={SQLIcon} alt="SQL Icon" className="h-12"/>
                        <img src={PythonIcon} alt="Python Icon" className="h-12"/>
                        <img src={DjangoIcon} alt="Django Icon" className="h-12"/>

                </section>

            {/* <img className="absolute inset-0 object-cover" src="https://media.licdn.com/dms/image/C4D03AQFN94ndXIuFow/profile-displayphoto-shrink_400_400/0/1661618824653?e=1702512000&v=beta&t=NagxC9SaA-RWQgrliESWVczo7KLdbMJsjmNg_hDHgII" alt="pic of me"/> */}

        </article>

        <br/>  

        <article className="bg-gray-900  p-4 text-yellow-500" >
            <p className=" flex justify-center text-3xl pb-2">PROJECTS</p>

            <div className="p-2">
                <div>
                <section className="flex justify-between ">
                    <div className="w-1/3">
                        <h1 className="text-3xl text-center underline">Quest Keeper</h1>
                        <h3>Tech Used: JavaScript & React, JSON Server, HTML, Tailwind-CSS</h3>
                        <p>QK is a full CRUD application that allows users to track their video game progress.</p>
                        
                    </div>
                    <div className="border-solid border-2 border-yellow-500 w-4/6">
                        <img src={WelcomeQK} alt="pic of the proj"/>
                    </div>
                </section>
                <p className="flex justify-end pb-6"> *links to code, video, and deployed*</p>
                </div>

                <div>
                <section className="flex justify-between ">
                <div className="w-1/3">
                        <h1 className="text-3xl text-center underline">Study Other Languages (S.O.L.)</h1>
                        <h3>Tech Used: JavaScript, React, JSON Server, HTML, CSS</h3>
                        <p>SOL was my first project I made to show my knowledge of front-end tech. JSON Server handles  pb-6requests. Create ands Delete only, video, and deployed </p>
                    </div>
                    <div className="border-solid border-2   border-yellow-500 w-4/6">
                        <img src={WelcomeSOL} alt="pic of the proj"/>
                    </div>
                </section>

                <p className="flex justify-end pb-6"> *links to code, video, and deployed*</p>
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

        <article className="bg-gray-900 text-yellow-500 p-10 " >
            <p className="flex justify-center text-3xl pb-8">EXPERIENCE</p>
                <div className="flex justify-evenly"> 
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

                    <br/>

                    <section className="w-80"> 
                        <div>
                            <h1>Irwin Painting Company</h1>
                            <h2>Estimator</h2>
                            <h4>November 2020 - August 2021</h4>
                            <ul>
                                <li>‣ Networked with General Contractors to help finalize bidding prices via email, phone, and in-person meetings </li>
                                <li>‣ Analyzed architectural plans using estimating software to provide accurate accounts of square footages for paint, equipment, labor costs, and other material</li>
                                <li>‣ Reviewed all estimatied quantities with company president;  preventing miscommunications & ensuring accurate pricing </li>
                                <li>‣ Successful contracts ($80,000 to $218,000) include: NSCC, MTSU, & Vanderbilt University </li>

                            </ul>
                        </div>
                    </section>
                </div>
        </article>

        <br/>
        <article className="bg-gray-900 text-yellow-500 p-10" >
            <p className="flex justify-center text-3xl pb-8">CONTACT</p>
                <section className="flex justify-around ">
                    <a href="https://www.linkedin.com/in/ely-dorado/" target="_blank" rel="noreferrer"> <img src={LinkedInSquare} alt="LinkedIn logo" className="w-8 pb-2"/> </a>
                    <a href="https://github.com/El-Dorado17" target="_blank" rel="noreferrer" > <img src={GitHubCat} alt="github cat" className="w-8 pb-2"/> </a>
                    <a href="mailto:2018dorado@gmail.com" className="text-blue-600 pb-2">2018dorado@gmail.com</a>
                    <a href="tel:+1234567890" className="pb-2">(615) 294-6390</a>

            </section>
        </article>


        {document.addEventListener('keydown', keyHandler, false)}
    </section>
        </>
    )
}