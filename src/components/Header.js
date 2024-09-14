import { APP_LOGO } from "../utils/constants"

const Header = () =>
(
    <div className='header'>
        <img src={APP_LOGO}
            className='image'></img>
        <ul className='navbar'>
            <li>Home</li>
            <li>Address</li>
            <li>Cart</li>
        </ul>
    </div >
);

export default Header;