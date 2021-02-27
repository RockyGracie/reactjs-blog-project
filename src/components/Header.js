import Logo from './Logo';

const Header = () => {
   return (
      <header className="header">
         <div className="header-logo">
            <Logo />
         </div>
         <ul className="header-list">
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/">About Us</a>
            </li>
            <li>
               <a href="/">Contact Us</a>
            </li>
            <li>
               <a href="/">New Blog</a>
            </li>
         </ul>
      </header>
   );
};

export default Header;