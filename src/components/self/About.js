//? components ==> views ==> App.js ==> index.js ==> Browser renders
//This file will contain the About Me function with info for my personal site and will be imported to AppViews
/*
I plan for the about me section to contain:
-A picture of myself
-a small snippet of my background
-Interactive guess inputs with alert-box responses (Prefer drop down boxes. Try next time!)
*/
//! import Photo_Template from './Photo_Template.jpg'        <img src={Photo_Template} className="pfp" alt="template for profile pic" />

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