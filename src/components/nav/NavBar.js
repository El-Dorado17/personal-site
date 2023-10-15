import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul className="fixed flex justify-around p-5 w-full text-yellow-500 bg-gray-900">
            {/* <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/About"> About </Link> </li>
            <li> <Link to="/Projects"> Projects </Link> </li> */}
            {/* <li> <Link to="/Quiz"> Quiz </Link> </li> */}
            {/* <li> <Link to="/Photos"> Photo Gallery </Link> </li>
            <li> <Link to="/Contact"> Contact </Link> </li> */}
        </ul>
    )
}