// App.jsx
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Nav from './layouts/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(faGithub, faLinkedin, faTwitter);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen dark:bg-dark-background dark:text-dark-primary-text">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
