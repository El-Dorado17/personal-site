//? components ==> views ==> App.js ==> index.js ==> Browser renders 

/* 
This module will contain the application view.
This is also the module that the browser is reading directly/first
*/


// import logo from './logo.svg';
// import './App.css';
// import Photo_Template from './Photo_Template.jpg'


import { ApplicationViews } from "./components/views/ApplicationViews.js";
import "./App.css"


export const App = () => (
  <>
    <ApplicationViews />
  </>
)




//! error with the following code being in the function: UseRoutes() may only be used in the context of a <Router> component
//?  This module needed to be updated with React fragments as well - 5/4
/*
Attempt 1:
// It needed Router as shown above!

Attempt 2:
// I am only returning ApplicationViews after comparing it to Honey-Rae

<Routes>
    <Route path="*" element={
          <ApplicationViews />
    
    } />
  </Routes>
*/

/*
TEST - I made a dev branch 
and will also be making a working branch. 
This comment is for Dev branch only until merged
*/

/*
TEST 2 - This comment was made in the work branch!
This branch will be used to do all my work & merged with dev until
I'm ready for a final merge into main! Good practice!
*/

/*
This work was done only on the work branch. Today I am practicing pushing
to GH, and pulling it down onto all other branches!
*/

