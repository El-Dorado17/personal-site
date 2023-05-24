//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info imported to AppViews
/*
//!This project isn't the most effective for learning React given that no state will be changing... 
//! Next: Come up with another app that will change state 5/8
*5/12* *ACTUALLY: What we're gonna do (instead of starting ANOTHER project) is make this application REACT-ive!!
My new plan is to make this reactive by having data and then we can use fetch requests to bring it back in!
This also means that this application will have an API to go along with it like my front-end capstone

Upon rendering, user can select facts about me, then click to see how many they got right! 
API will have the data to render, and the fetch request in my UseEffect will bring it in! 
TODO: Make each fact a button that will hold the answer onClick... Score presented upon submit
d on any props or state values, it doesn't need to be re-run when any of them change. //? Understood

*/
import { useEffect, useState } from "react"
import "./About.css" 

export const AboutMe = () => {

const [facts, setFacts] = useState([])


useEffect(
    () => {
        fetch("http://localhost:8088/facts")
        .then((response)=> response.json())
        .then((factArray)=> {
            setFacts(factArray)
        })
    },
    []
)

    const handleClick = () => {
        console.log('Hello')
    }

    const factButton = (factObj) => {
        return(
            <button onClick={handleClick}>
                Click For Results
            </button>
        )
    }

return (
    <div>
        <div className="facts">
        {facts.map((fact)=> (
            <p className="fact" key={fact.id}>{fact.statement} {fact.valid}</p>
        ))}
        </div>
        <section>
            {factButton()}
        </section>
    </div>
    )
}