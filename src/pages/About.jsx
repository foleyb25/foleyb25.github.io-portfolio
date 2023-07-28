import { useEffect, useRef } from 'react';
import { Pong } from '../games/pong';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import ProjectCard from '../components/ProjectCard';

const About = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const canvasRef = useRef(null);
  const pong = useRef(null);
  const backgroundImagePathNight =
    '../src/assets/images/indoor-arcade-night-min.png';
  const backgroundImagePathDay =
    '../src/assets/images/outdoor-arcade-day-min.png';

  const gameItems = [
    {
      name: 'Secret of Mana',
      info: 'Info about Secret of Mana',
      img:
        'https://cdn.mobygames.com/0f33ad74-aba6-11ed-aaf5-02420a00019c.webp',
    },
    {
      name: 'Zelda: A Link to the Past',
      info: 'Info about Zelda',
      img:
        'https://cdn.mobygames.com/ed7fd308-aba3-11ed-8bb9-02420a000197.webp',
    },
    {
      name: 'Super Mario World',
      info: 'Info about Super Mario World',
      img:
        'https://cdn.mobygames.com/f8ea49cc-abbb-11ed-9ae2-02420a0001a0.webp',
    },
    {
      name: 'Donkey Kong Country',
      info: 'Info about Donkey Kong Country',
      img:
        'https://cdn.mobygames.com/09e76136-aba5-11ed-9e18-02420a00019a.webp',
    },
    {
      name: 'Super Star Wars',
      info: 'Info about Super Star Wars',
      img:
        'https://cdn.mobygames.com/07ce1c5e-aba6-11ed-b165-02420a000198.webp',
    },
  ];

  const movieItems = [
    {
      name: 'Secret of Mana',
      info: 'Info about Secret of Mana',
      img:
        'https://cdn.mobygames.com/0f33ad74-aba6-11ed-aaf5-02420a00019c.webp',
    },
    {
      name: 'Zelda: A Link to the Past',
      info: 'Info about Zelda',
      img:
        'https://cdn.mobygames.com/ed7fd308-aba3-11ed-8bb9-02420a000197.webp',
    },
    {
      name: 'Super Mario World',
      info: 'Info about Super Mario World',
      img:
        'https://cdn.mobygames.com/f8ea49cc-abbb-11ed-9ae2-02420a0001a0.webp',
    },
    {
      name: 'Donkey Kong Country',
      info: 'Info about Donkey Kong Country',
      img:
        'https://cdn.mobygames.com/09e76136-aba5-11ed-9e18-02420a00019a.webp',
    },
    {
      name: 'Super Star Wars',
      info: 'Info about Super Star Wars',
      img:
        'https://cdn.mobygames.com/07ce1c5e-aba6-11ed-b165-02420a000198.webp',
    },
  ];

  const tvItems = [
    {
      name: 'Secret of Mana',
      info: 'Info about Secret of Mana',
      img:
        'https://cdn.mobygames.com/0f33ad74-aba6-11ed-aaf5-02420a00019c.webp',
    },
    {
      name: 'Zelda: A Link to the Past',
      info: 'Info about Zelda',
      img:
        'https://cdn.mobygames.com/ed7fd308-aba3-11ed-8bb9-02420a000197.webp',
    },
    {
      name: 'Super Mario World',
      info: 'Info about Super Mario World',
      img:
        'https://cdn.mobygames.com/f8ea49cc-abbb-11ed-9ae2-02420a0001a0.webp',
    },
    {
      name: 'Donkey Kong Country',
      info: 'Info about Donkey Kong Country',
      img:
        'https://cdn.mobygames.com/09e76136-aba5-11ed-9e18-02420a00019a.webp',
    },
    {
      name: 'Super Star Wars',
      info: 'Info about Super Star Wars',
      img:
        'https://cdn.mobygames.com/07ce1c5e-aba6-11ed-b165-02420a000198.webp',
    },
  ];

  const allItems = [];
  allItems.push(gameItems);
  allItems.push(movieItems);
  allItems.push(tvItems);

  useEffect(() => {
    // Set the canvas dimensions
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;

    // Create the Pong game
    pong.current = new Pong(canvasRef.current);
    pong.current.start();

    // Disable scrolling when touch move event happens on the canvas
    const disableScroll = e => e.preventDefault();
    canvasRef.current.addEventListener('touchmove', disableScroll, {
      passive: false,
    });

    // Clean up:
    return () => {
      pong.current.destroy();
    };
  }, []);

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

      <div className="w-full">
        <h1 className="text-center text-4xl md:text-6xl font-bold mt-8 mb-8">
          Top 5 Lists
        </h1>
        <div className="flex flex-wrap m-2">
          {allItems.map((items, i) => (
            <ProjectCard key={i} items={items} />
          ))}

          {/* Add more ProjectCard components here for additional projects */}
        </div>
      </div>

      {/* pong game container */}
      <div className="flex justify-center items-center mt-8 mb-8">
        <canvas
          ref={canvasRef}
          className={`w-1/2 aspect-video border rounded ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}
          data-fill-color={isDarkMode ? 'text-white' : 'text-black'}
        />
      </div>

      {/* Grid layout below the banner */}
      <div className="grid gap-24 p-4">
        <div className="flex flex-col md:flex-row bg-primary-accent text-center">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl">Beer League Hockey</h1>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            <p>I'm an avid Beer League Hockey Player</p>
            {/* Insert more text here */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 overflow-hidden rounded-full">
              <img
                src="../src/assets/images/AI-future-day-min.png"
                alt=""
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse bg-secondary-accent">
          <div className="w-full md:w-1/2 p-4 text-center">
            <h1 className="text-2xl">Dirbike Riding</h1>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            <p>I'm an avid Dirt Bike rider</p>
            {/* Insert more text here */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 overflow-hidden rounded-full">
              <img
                src="../src/assets/images/AI-future-day-min.png"
                alt=""
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>

      <div className="flex flex-col md:flex-row bg-primary-accent text-center">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl">Running</h1>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          <p>I'm an avid Beer League Hockey Player</p>
          {/* Insert more text here */}
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <img
              src="../src/assets/images/AI-future-day-min.png"
              alt=""
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
