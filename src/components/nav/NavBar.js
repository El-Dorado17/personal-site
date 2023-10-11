import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="bg-green-300 flex justify-center space-x-8 p-10">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/About"> About Me </Link> </li>
            <li> <Link to="/Projects"> Projects </Link> </li>
            <li> <Link to="/Quiz"> Quiz </Link> </li>
            <li> <Link to="/Photos"> Photo Gallery </Link> </li>
            <li> <Link to="/Contact"> Contact </Link> </li>
        </ul>
    )
}