//? components ==> views ==> App.js ==> index.js ==> Browser renders 

/* 
This module will contain the application view.
This is also the module that the browser is reading directly/first
*/


// import logo from './logo.svg';
// import Photo_Template from './Photo_Template.jpg'
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationViews.js";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  </Router>
  );
}


export default App;


//! error with the following code being in the function: UseRoutes() may only be used in the context of a <Router> component
//? It needed Router as shown above!
/*
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

/*
      <div>
        <ul>
          <li>
            <input type="radio" name="color"/> one
            <input type="radio" name="color"/> two
            <input type="radio" name="color"/> three
          </li>
        </ul>
      </div>
*/