//Module will have a picture of me, and biography

import pfpImage from "./pfp.jpg"
import "../about/About.css"
import Ely from '/home/dorado/workspace/personal-site/src/images/personal/Resume Picture (cropped).jpg'

export const About = () => {


    return(
        <>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ">
            <article>

                <br/> <br/> <br/>
                <div className=" ">
                    <img src={Ely} alt="self portrait" className="h-80 pl-2 picture" />
                    <p className="pl-4 text-yellow-500">Ely Dorado</p>
                </div>

                <section>

                    <p>here I'll have a bio, work history, and my skillset!</p>
                </section>
                
            </article>
        </div>
        </>
    )
}