import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <div className="header-logo">
            <Logo />
         </div>
         <ul className="header-list">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About Us</Link>
            </li>
            <li>
               <Link to="/contact">Contact Us</Link>
            </li>
            <li>
               <a href="/">New Post</a>
            </li>
         </ul>
      </header>
   );
};

export default Header;