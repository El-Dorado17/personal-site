import React from "react";
import { useNavigate } from "react-router-dom";

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
    <section className= " min-h-screen bg-[url('https://www.techrepublic.com/wp-content/uploads/2012/02/ScreenShot9.png')] bg-cover bg-center bg-fixed p-10">
        <article title="this is my name" className=" bg-green-200 h-80 p-10  bg-cover bg-center flex items-center justify-center">
            
            <div className="flex flex-col items-center">

            <p className=" text-6xl mb-6 ">Ely Dorado </p>
            
            <p className=" text-4xl ">Software Developer</p>

            </div>

            {/* <img className="absolute inset-0 object-cover" src="https://media.licdn.com/dms/image/C4D03AQFN94ndXIuFow/profile-displayphoto-shrink_400_400/0/1661618824653?e=1702512000&v=beta&t=NagxC9SaA-RWQgrliESWVczo7KLdbMJsjmNg_hDHgII" alt="pic of me"/> */}

        </article>

        <br/>

        <article className="bg-blue-200 h-screen p-10" >
            <p className=" flex justify-center text-3xl">Projects</p>
            <section>
                <div>
                    project 1 SOL
                </div>
                {/* <img src="h.JPG" alt="pic of Hawaii"/> */}
            </section>
            <section>
                <div>
                    project 2 QK
                </div>
            </section>
            <section>
                <div>
                    project 3 VS
                </div>
            </section>
        </article>

        <br/>
        <article className="bg-blue-200 h-80 p-10" >
            <p>work experience</p>
        </article>

        <br/>
        <article className="bg-blue-200 h-80 p-10" >
            <p>Contact</p>
        </article>
        {document.addEventListener('keydown', keyHandler, false)}
    </section>
        </>
    )
}