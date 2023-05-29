/*

*WIREFRAME: https://wireframe.cc/HFAW0f


json-server -p 8088 database.json -w









!How to keep track of a users selection
*Display all answer choices may be simplest,
*OnClick => ID of each answer stored to an Array State to keep track of what they selected











What does BrowserRouter do?

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
This function can be used to perform tasks such as setting up subscriptions or manipulating the DOM.
The second argument to useEffect is an array of dependencies. This dependency list is used to tell React when to run the effect.
If any of the values in the dependency list change, the effect will run again. If you don't have any dependencies, 
you can pass an empty array ([]) to tell React to run the effect only once.

TODO: Implement and explain in my own words


import Photo_Template from './Photo_Template.jpg'        <img src={Photo_Template} className="pfp" alt="template for profile pic" />






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
    depen

*/