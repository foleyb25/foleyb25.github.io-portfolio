// App.jsx
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Nav from './layouts/DesktopNavBar';
import MobileNav from './layouts/MobileNavBar';
import { useState } from 'react';
// import { DrawerProvider, useDrawer } from './context/DrawerContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(faGithub, faLinkedin, faTwitter);

const App = () => {
  // const [isExpanded] = useDrawer();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // <DrawerProvider>
    <Router>
      <div className="min-h-screen dark:bg-dark-background dark:text-dark-primary-text">
        <div className="block md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <Nav isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>

        <div
          className={`flex-1 transition-margin duration-300 ${
            isExpanded ? 'ml-64' : 'md:ml-20 ml-0'
          }`}
        >
          <Routes />
        </div>
      </div>
    </Router>
    // </DrawerProvider>
  );
};

export default App;
