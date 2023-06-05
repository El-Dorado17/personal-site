//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info imported to AppViews

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

    const handleClick = (fact) => {
        fact.valid? alert('Muy Bien!')
        : alert('Definitely not!')
    }

    

return (
    <div className="facts">
        {facts.map((fact) => (
        <div key={fact.id}>
        <button className="fact" onClick={()=>handleClick(fact)}>{fact.statement} {fact.valid}</button>
        </div>
        ))}
    </div>
    )
}



/*

When a user clicks a box, that option needs to be recorded
and when the user clicks for results; their answers need to be checked
and given a score based off of correct/incorrect

!How to keep track of a users selection
*Display all answer choices may be simplest,
*OnClick => ID of each answer stored to an Array State to keep track of 
*what they selected

lies state, 
state that stores answers
fetch call that queries if its true and one that q's if its false

what do i need to do next? Not big picture


*/