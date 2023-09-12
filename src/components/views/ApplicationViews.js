//? components ==> views ==> App.js ==> index.js ==> Browser renders

/*
This module will host all my components so I can arrange them how I'd like
This module gets imported to App.js as the final step to make the page!
*/
import { About } from "../about/About.js"
//import { Projects } from "../projects/Projects.js"
//import { Quiz } from "../quiz/Quiz.js"
import { NavBar } from "../nav/NavBar.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<About/>}/>
            {/* <Route path="/" element={<Projects/>}/>
            <Route path="/" element={<Quiz/>}/> */}
        </Routes>
    </>
}

/*
route path is basically "LocalHost3000" and everything after is like what goes in URL /self, /info, etc

ASSISTED BY A CLASSMATE AND WE GOT IT!!!! the path^^^ was too specific maybe? It previously said /self/About //?5/4
*/