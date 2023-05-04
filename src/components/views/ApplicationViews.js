//? components ==> views ==> App.js ==> index.js ==> Browser renders

/*
This module will host all my components so I can arrange them how I'd like
This module gets imported to App.js as the final step to make the page!
*/
import { AboutMe } from "../self/About.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/self" element={<AboutMe/>}/>
        </Routes>
    )
}