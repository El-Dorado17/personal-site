import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="flex justify-center space-x-8">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/About"> About Me </Link> </li>
            <li> Projects </li>
            <li> Quiz </li>
            <li> Photo Gallery </li>
        </ul>
    )
}