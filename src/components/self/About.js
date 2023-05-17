//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info imported to AppViews
/*
//!This project isn't the most effective for learning React given that no state will be changing... 
//! Next: Come up with another app that will change state 5/8
*5/12* *ACTUALLY: What we're gonna do (instead of starting ANOTHER project) is make this application REACT-ive!! 
* (If anyone ever reads this please bring it up)
My new plan is to make this reactive by having data and then we can use fetch requests to bring it back in!
This also means that this application will have an API to go along with it like my front-end capstone

Upon rendering, user can select facts about me and the click to see how many they got right! 
TODO: API will have the data to render, and the fetch request in my UseEffect will bring it in! 


useEffect(
    () => {
        fetch("http://localhost:8088/categories")
            .then((response) => response.json())
            .then((categoryArray) => {      //? <= Is the categoryArray the JSON response?
                setCategories(categoryArray);
            });
    },
    [] // When this array is empty, you are observing initial component state
);

The useEffect hook takes two arguments: a callback function and an array of dependencies. 
    In this case, the callback function is an arrow function 
    that fetches data from 
    the "http://localhost:8088/categories" 
    API endpoint using the fetch() method.  //?Understood

Once the API data is fetched, the response object is converted to JSON format using the .json() method, 
    and then the resulting categoryArray is passed as an argument to the setCategories function. setCategories 
    is a state updater function that is used to set the state of the component with the fetched data. 

The second argument of useEffect is an empty array, which means that the effect will 
    only run once when the component is mounted. When the array of dependencies is empty, 
    the useEffect hook observes only the initial component state. Since this effect doesn't 
    depend on any props or state values, it doesn't need to be re-run when any of them change. //? Understood
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

return (
    <div>
        {facts.map((fact)=> (
            <p className="facts" key={fact.id}>{fact.statement} {fact.valid}</p>
        ))}
    </div>
    )
}