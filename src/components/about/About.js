//Module will have a picture of me, and biography

import pfpImage from "./pfp.jpg"
import "../about/About.css"


export const About = () => {


    return(
        <>
        <div className="min-h-screen bg-gradient-to-b from-green-200 to-blue-200">
        <img src={pfpImage} alt="spongebob picture" className="w-40 h-40 pl-4 pt-4 md:pt-8 lg:pt-12 "></img>
        <h1 className="pl-4 ">Ely Dorado</h1>
        <p>here I'll have a bio, work history, and my skillset!</p>
        </div>
        </>
    )
}