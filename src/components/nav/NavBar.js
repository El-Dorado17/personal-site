import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="bg-green-200 flex justify-evenly space-x-8 p-4">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/About"> About </Link> </li>
            <li> <Link to="/Projects"> Projects </Link> </li>
            {/* <li> <Link to="/Quiz"> Quiz </Link> </li> */}
            <li> <Link to="/Photos"> Photo Gallery </Link> </li>
            <li> <Link to="/Contact"> Contact </Link> </li>
        </ul>
    )
}