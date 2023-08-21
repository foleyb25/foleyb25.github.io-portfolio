// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import darkModeLogo from '/src/assets/logos/main-dark-mode.png';
import lightModeLogo from '/src/assets/logos/main-light-mode.png';
import BFIcon from '/src/assets/images/bf_favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faBriefcase,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';

const DesktopNavBar = ({ isExpanded, setIsExpanded }) => {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!isDarkMode);
  };

  const links = [
    { linkName: 'Home Base', path: '/', icon: faHome },
    { linkName: 'My Life', path: '/about', icon: faInfoCircle },
    { linkName: 'Portfolio', path: '/portfolio', icon: faBriefcase },
    { linkName: 'Resume', path: '/resume', icon: faFileLines },
  ];

  return (
    <nav
      className={`border-r border-black dark:border-white bg-primary text-primary flex flex-col h-screen py-4 fixed top-0 left-0 z-10 transition-width duration-300 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link
        to="/"
        className="text-2xl font-bold mb-4 flex justify-center items-center"
      >
        <img
          src={
            isExpanded ? (isDarkMode ? darkModeLogo : lightModeLogo) : BFIcon
          }
          style={isExpanded ? { borderRadius: '0%' } : { borderRadius: '100%' }}
          alt="Logo"
          className="object-contain h-auto w-[75%]"
        />
      </Link>
      <div className="flex flex-col items-center justify-start space-y-8 mt-8 flex-1">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="px-2 text-center w-full flex justify-center items-center"
          >
            {isExpanded ? (
              link.linkName
            ) : (
              <FontAwesomeIcon icon={link.icon} className="text-2xl" />
            )}
          </Link>
        ))}
        <button
          onClick={toggleDarkMode}
          className="py-1 px-2 mt-auto bg-black border border-white rounded hover:bg-gray-500 self-center"
          style={isExpanded ? { display: 'block' } : { display: 'none' }}
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <div
        className="flex flex-col items-center justify-end flex-1"
        style={isExpanded ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="mb-8">
          <a
            href="https://github.com/foleyb25"
            target="_blank"
            rel="noreferrer"
            className="mr-4" // Added margin-right
          >
            <FontAwesomeIcon icon={['fab', 'github']} className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-foley-456624196/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-4xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
