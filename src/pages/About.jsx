import { useEffect, useRef } from 'react';
import { Pong } from '../games/pong';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import backgroundImageDay from '/src/assets/images/outdoor-arcade-day-min.webp';
import backgroundImageNight from '/src/assets/images/indoor-arcade-night-min.webp';
import halfMarathonImage from '/src/assets/images/half_marathon.webp';
import golfImage from '/src/assets/images/golf.webp';

const About = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const canvasRef = useRef(null);
  const pong = useRef(null);

  const ActivitySection = ({
    title,
    text,
    imageUrl,
    reverse = false,
    primary = true,
  }) => (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } ${primary ? 'bg-primary-accent' : 'bg-secondary-accent'} text-center`}
    >
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl">{title}</h1>
        <p>{text}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-64 h-64 overflow-hidden rounded-full">
          <img src={imageUrl} alt={title} className="object-cover h-full" />
        </div>
      </div>
    </div>
  );

  const activities = [
    {
      title: 'Running',
      text: `I used to not like running, absolutely despised it. It wasn't
      until one day in 2019 I heard about David Goggins running a 135
      mile ultra-marathon in the middle of Death Valley, CA. I thought, if
      he could do that I could at least run a half marathon. From there,
      I went on to run a pair of full marathons and three half-marathons. 
      This newfound passion for running has changed my life
      in the most positive way imaginable.`,
      imageUrl: halfMarathonImage,
      reverse: false,
      primary: true,
    },
    {
      title: 'Golfing',
      text: `For my summer job in college I worked Grounds Crew at a country club 
        in Bozeman, MT. With free golf as a perk, I was able to hone my skills
        and take on a new hobby. Fun fact: I hit my irons/driver left handed but
        putt right handed...I also putt like Happy Gilmore.`,
      imageUrl: golfImage,
      reverse: true,
      primary: false,
    },
    // ... add more activities as needed
  ];

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
            isDarkMode ? backgroundImageNight : backgroundImageDay
          })`,
        }}
      />

      {/* pong game container */}
      <div className="flex flex-col items-center justify-center items-center mt-24 mb-24">
        <canvas
          ref={canvasRef}
          className={`w-[95%] md:w-1/2 aspect-video border rounded ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}
          data-fill-color={isDarkMode ? 'text-white' : 'text-black'}
        />
        <p className="hidden md:block animate-pulse text-center mt-4">
          [W] - left paddle up | [U] - right paddle up | [S] - left paddle down
          | [J] - right paddle down
        </p>
      </div>

      <div className="grid gap-24 p-4">
        {activities.map((activity, index) => (
          <ActivitySection
            key={index}
            title={activity.title}
            text={activity.text}
            imageUrl={activity.imageUrl}
            reverse={activity.reverse}
            primary={activity.primary}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
