/*

*WIREFRAME: https://wireframe.cc/HFAW0f



//Run the API with:
//json-server -p 8088 database.json -w
!API NOT NEEDED AT THE MOMENT. Looking to just use this repo and nothing else






        <label for="test">Weekly progress:</label>
        <meter id="test" value="5" min="0" max="10">5 out of 10</meter><br></br>





Tailwind is running


-React expresses state as HTML
-UseEffect observes state
-UseState sets state
-State flows downward: A fetch req. in a parent component can be used within 2 children

useEffect 
    (function to run) = {updates state variable },
    [state to observe]



useState
const [stateVariable, functionThatManipulates] = useState ([])
                                                            ^Initial State




UseEffects

useEffect is a hook in React that lets you run side effects in a function component.
Side effects are operations that you perform that have some sort of impact outside of the component itself,
such as manipulating the DOM or making network requests.

Ex:
import { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        *side effect code goes here*
    }, [dependencyList]);
        *component code goes here*
}

The first argument to useEffect is a function that will run as the side effect.
This function can be used to perform tasks such as setting up subscriptions or 
manipulating the DOM.
The second argument to useEffect is an array of dependencies. This dependency 
list is used to tell React when to run the effect.
If any of the values in the dependency list change, the effect will run again. If 
you don't have any dependencies, 
you can pass an empty array ([]) to tell React to run the effect only once.






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













Tailwind, CSS, HTML, SQL?, 



//*  HOME   ABOUT ME    PROJECTS    QUIZ    PHOTO GALLERY   CONTACT 

Right now, upon start the page is really simple: My name, and title

*HOME
I'm looking to make first page just a classy title card. 
Ely Dorado, SD, Maybe a link to LinkedIn & GitHub


*ABOUT ME
I'll have a picture of me, 
little bio
skillset
work history



*Projects
Links to 
SOL //!SCREENSHOTS NEEDED & LINK TO VIDEO DEMONSTRATION
Quest Keeper //!SCREENSHOTS NEEDED & LINK TO VIDEO DEMONSTRATION
Vacation Station //!SCREENSHOTS NEEDED & LINK TO VIDEO DEMONSTRATION
Discord bot maybe??
















min-h-screen


bg-blue-500


flex items-center justify-center














*/