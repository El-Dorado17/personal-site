//? components ==> views ==> App.js ==> index.js ==> Browser renders


//This file will contain the About Me function with info for my personal site and will be imported to AppViews

/*
I plan for the about me section to contain:
-A picture of myself
-a small snippet of my background

TODO: Input with radio button: Guess my favorite color
    If correct color, alert "Good Job!"
    Else, alert "try again"

When successful: Guess my favorite book series, video game, & band
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
    </div>
    )
}