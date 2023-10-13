import { useEffect, useState } from "react" //importing from the react library
import Galaxy from '/home/dorado/workspace/personal-site/src/images/gold-galaxy.jpg'


// Guessing Game (matching game maybe? 
// or just select the correct input field and submit form



export function Quiz(params) {

    return(
        <>
            <article className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${Galaxy})`}}>
                    <br/> <br/>
                <div className="">
                    <br/> <p className="text-gray-100">blah blah</p>
                </div>
            </article>
        </>
    )
    
}






/*
    !Can incorporate this
        <label for="test">Weekly progress:</label>
        <meter id="test" value="5" min="0" max="10">5 out of 10</meter><br></br>

*/














//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info imported to AppViews
//! REACT EXPRESSES JSCRIPT AS HTML



// export const AboutMe = () => { //function declaration

// const [facts, setFacts] = useState([])  // facts is a variable, setFacts is a function //!useState ESTABLISHES state

// useEffect( //!useEffect OBSERVES state (in this case nothing, meaning on initial render, give me all the facts)
//     () => {
//         fetch("http://localhost:8088/facts") //fetch the facts from the api
//         .then((response)=> response.json()) //turn the facts back into JSON
//         .then((factArray)=> { //?Am I creating the factArray here? factArray = JSON facts from API?
//             setFacts(factArray) //setting the factArray so facts (line 11) is the fact array from API
//         })
//     },
//     [] // It's not monitoring anything, so this will fire on inital render and no other time
// )

//     const handleClick = (fact) => { //function with a fact parameter //! It is NOT an argument yet. The word fact could be 'taco' here
//         fact.valid? alert( `${fact.id}: Si! Well done!`) //is the valid property of the argument true? IF YES, alert Si
//         : alert(`${fact.id}: Sorry, but definitely not!`)// IF NO, alert Sorry
//     }

    

// return ( //Round parenthesis to return JSX
//     <div className="facts"> 
//         {facts.map((fact) => ( //mapping through facts, from now on known as fact
//         <div key={fact.id}> 
//         <button className="button" onClick={()=>handleClick(fact)}> {fact.id}: {fact.statement} {fact.valid}</button>
//         </div>
//         ))}
//     </div>
//     )
// }



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