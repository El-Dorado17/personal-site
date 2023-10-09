import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="bg-gradient-to-b from-green-300 to-green-200 flex justify-center space-x-8">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/About"> About Me </Link> </li>
            <li> <Link to="/Projects"> Projects </Link> </li>
            <li> <Link to="/Quiz"> Quiz </Link> </li>
            <li> <Link to="/Photos"> Photo Gallery </Link> </li>
            <li> <Link to="/Contact"> Contact </Link> </li>
        </ul>
    )
}