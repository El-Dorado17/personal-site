//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info for my personal site and will be imported to AppViews
/*
I plan for the about me section to contain:
-A picture of myself
-a small snippet of my background
-Interactive guess inputs with alert-box responses (Prefer drop down boxes. Try next time!)
*/
// import Photo_Template from './Photo_Template.jpg'        <img src={Photo_Template} className="pfp" alt="template for profile pic" />

/*
//!This project isn't the most effective for learning React given that no state will be changing... 
//! Next: Come up with another app that will change state 5/8
*5/12* *ACTUALLY: What we're gonna do (instead of starting ANOTHER project) is make this application REACT-ive!! 
* (If anyone ever reads this please bring it up)
My new plan is to make this reactive by having data and then we can use fetch requests to bring it back in!
This also means that this application will have an API to go along with it like my front-end capstone

TODO: WIREFRAME IS DONE AND ITS REALLY GOOD! I KNOW I CAN MAKE THIS WORK!!

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


export const AboutMe = () => {





    return (
    <div className="aboutMe">
    
        <h2>
            Hello, World!
        </h2>
        <h4>
            Welcome to my extra-curiccular React App!
        </h4>
        <p className="bio">
            I plan to make a personal page that will display little facts about me, 
            things I like, and hopefully some things I (or anyone who is reading this) can interact with!
        </p>
        <div>
            <h4>Guess my favorites!</h4>
            <ul> Color:
                <li>
                    <input type="radio" name="color"/> Teal
                </li>
                <li>
                    <input type="radio" name="color"/> Dandelion
                </li>
                <li>
                    <input type="radio" name="color"/> Purple
                </li>
                <li>
                    <input type="radio" name="color"/> Red
                </li>
            </ul>

            <button onClick={colorCheck()}>Check Answer</button>


            <ul> Book Series
                <li>
                    <input type="radio" name="book"/> Percy Jackson & The Olympians (2005-2009)
                </li>
                <li>
                    <input type="radio" name="book"/> The Hunger Games (2008 - 2010)
                </li>
                <li>
                    <input type="radio" name="book"/> Narnia (1950 - 1956)
                </li>
                <li>
                    <input type="radio" name="book"/> Harry Potter (1997 - 2007)
                </li>
            </ul>

            <ul> Video Game
                <li>
                    <input type="radio" name="game"/> TES V: Skyrim (2011)
                </li>
                <li>
                    <input type="radio" name="game"/> Horizon: Zero Dawn (2017)
                </li>
                <li>
                    <input type="radio" name="game"/> Minecraft (2011)
                </li>
                <li>
                    <input type="radio" name="game"/> Asteroids (1979)
                </li>
            </ul>
        </div>
    </div>
    
    )
}