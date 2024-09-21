import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants"

const Header = () =>
(
    <div className='header'>
        <img src={APP_LOGO}
            className='image'></img>
        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li>Cart</li>
        </ul>
    </div >
);

export default Header;