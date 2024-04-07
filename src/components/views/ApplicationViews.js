//? components ==> views ==> App.js ==> index.js ==> Browser renders

/*
This module will host all my components so I can arrange them how I'd like
This module gets imported to App.js as the final step to make the page!
*/
import { Home } from "../home/Home.js"
import { Resume } from "../resume/Resume.js"
import { About } from "../about/About.js"
import { Projects } from "../projects/Projects.js"
import { Photos } from "../photos/Photos.js"
import { Contact } from "../contact/Contact.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <Routes>        
            <Route path="/" element={<Home/>}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Photos" element={<Photos/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </>
}
