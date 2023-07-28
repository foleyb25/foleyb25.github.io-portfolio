import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Portfolio = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const backgroundImagePathNight =
    '../src/assets/images/city-landscape-night-min.png';
  const backgroundImagePathDay =
    '../src/assets/images/city-landscape-day-min.png';

  const projects = [
    {
      title: 'All Things Great',
      description:
        'When Satire meets information, you are given All Things Great. A blogging site covering various topics with an emphasis on satire and humor.',
      image: '../src/assets/images/AllThingsGreat-Logo.png',
      technologies: ['Vue', 'Vercel', 'Tailwind CSS', 'Pinia'],
      link: 'https://allthingsgreat.com', // live project link
      code: '', // source code link
    },
    {
      title: 'All Things Great Writer',
      description:
        'Writer platform for All Things Great empowering writers to create innovative content.',
      image: '/images/weather-app.png',
      technologies: [
        'Vue',
        'Github Pages',
        'Github Actions',
        'Tailwind CSS',
        'MongoDB',
      ],
      link: 'https://allthingsgreatwriter.app', // live project link
      code: '', // source code link
    },
    {
      title: 'All Things Great API',
      description:
        'Writer platform for All Things Great empowering writers to create innovative content.',
      image: '../src/assets/images/ATG-API-Code.png',
      technologies: [
        'Vue',
        'Github Pages',
        'Github Actions',
        'Tailwind CSS',
        'MongoDB',
      ],
      link: '', // live project link
      code: '', // source code link
    },
    {
      title: 'Barguments',
      description:
        'Writer platform for All Things Great empowering writers to create innovative content.',
      image: '/images/weather-app.png',
      technologies: ['Swift', 'OpenAI', 'Tailwind CSS'],
      link: 'https://apps.apple.com/us/app/barguments/id6450323880', // live project link
      code: 'https://github.com/foleyb25/Barguments-iOS', // source code link
    },
    // more project objects here...
  ];

  return (
    <div className="bg-primary text-primary">
      {/* Full-width hero banner */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImagePathNight : backgroundImagePathDay
          })`,
        }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg p-4">
              <img
                className="w-full h-64 object-cover object-left"
                src={project.image}
                alt={project.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
              <div className="px-6 py-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  See More
                </a>
                {project.code ? (
                  <a
                    href={project.code}
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                  >
                    GitHub
                  </a>
                ) : (
                  <p className="text-gray-500 font-bold py-2 px-4">
                    Private Repo
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
