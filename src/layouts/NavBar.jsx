// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import darkModeLogo from '/src/assets/logos/main-dark-mode.png';
import lightModeLogo from '/src/assets/logos/main-light-mode.png';

const NavBar = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-primary text-primary flex flex-col md:flex-row justify-between items-center py-4 w-full h-auto md:h-24">
      <Link
        to="/"
        className="text-2xl font-bold h-full ml-2 md:ml-8 mb-4 md:mb-0 flex justify-center"
      >
        <img
          src={isDarkMode ? darkModeLogo : lightModeLogo}
          alt="Logo"
          className="object-contain h-full md:w-auto w-1/2 ml-2"
        />{' '}
        {/* Add your logo URL here */}
      </Link>
      <div className="mr-2 md:mr-8 flex items-center justify-between">
        <div>
          <Link to="/" className="px-2">
            Home
          </Link>
          <Link to="/about" className="px-2">
            About
          </Link>
          <Link to="/portfolio" className="px-2">
            Portfolio
          </Link>
          <Link to="/blog" className="px-2">
            Blog
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className="px-2 md:ml-8 bg-transparent hover:bg-transparent"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
