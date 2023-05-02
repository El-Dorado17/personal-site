// import logo from './logo.svg';
import Photo_Template from './Photo_Template.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Photo_Template} className="pfp" alt="template for profile pic" />
        <h2>
          Hello, World!
        </h2>
        <h4>Welcome to my extra-curiccular React App!</h4>
        <p>I plan to make a personal page that will display little facts about me,</p>
        <p> 
          things I like, and hopefully some things I (or anyone who is reading this) can interact with!
        </p>
      </header>
      <div>
        <ul>
          <li>
            <input type="radio" name="color"/> one
            <input type="radio" name="color"/> two
            <input type="radio" name="color"/> three
          </li>
        </ul>
      </div>
    </div>

  );
}

export default App;
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