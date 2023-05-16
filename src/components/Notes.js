/*

*WIREFRAME: https://wireframe.cc/HFAW0f


json-server -p 8088 database.json -w


!What does BrowserRouter do?



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

*/