import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="flex justify-center space-x-8">
            <li> Home </li>
            <li> About Me </li>
            <li> Projects </li>
            <li> Quiz </li>
            <li> Photo Gallery </li>
        </ul>
    )
}