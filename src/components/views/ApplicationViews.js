//? components ==> views ==> App.js ==> index.js ==> Browser renders

/*
This module will host all my components so I can arrange them how I'd like
This module gets imported to App.js as the final step to make the page!
*/
import { AboutMe } from "../self/About.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <h1 className="banner">Welcome! Please select whichever fact about me you believe to be true</h1>
        <Routes>
            <Route path="/" element={<AboutMe/>}/>
        </Routes>
    </>
}

/*
route path is basically "LocalHost3000" and everything after is like what goes in URL /self, /info, etc

ASSISTED BY A CLASSMATE AND WE GOT IT!!!! the path^^^ was too specific maybe? It previously said /self/About //?5/4
*/