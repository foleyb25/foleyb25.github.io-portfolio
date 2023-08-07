import { useEffect, useRef } from 'react';
import { Pong } from '../games/pong';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import ProjectCard from '../components/ProjectCard';
import backgroundImageDay from '/src/assets/images/outdoor-arcade-day-min.webp';
import backgroundImageNight from '/src/assets/images/indoor-arcade-night-min.webp';

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
      imageUrl: '../src/assets/images/half_marathon.png',
      reverse: false,
      primary: true,
    },
    {
      title: 'Dirtbike Riding',
      text: `That's not actually me in this picture but it would be pretty cool
      if it was. It's actually using Midjourney in it's finest form. 
      In my early days of riding, I had tied on my Thorogood
      boots and would do casual rides from Montana City to Clancy,
      nothing too serious. In the summer of 2023, I reconnected with an
      old friend who is big into riding and we started to do more
      technical trails in the mountains. I said goodbye to my riding
      days with the Thorogood boots, and hello to a new back country
      adventure.`,
      imageUrl: '../src/assets/images/dirtbike_firepit.webp',
      reverse: true,
      primary: false,
    },
    {
      title: 'Beer League Hockey',
      text: `I'm adding pond hockey to this one as well. I bought my first pair
      of skates while on home for leave in the winter of 2014. My friend
      group and I went out for a night of drinking and woke up the next
      morning to skate at the local park in Helena, Montana. I learned
      to skate with a massive hangover and some liquid courage.`,
      imageUrl: '../src/assets/images/beer_league.jpg',
      reverse: false,
      primary: true,
    },
    {
      title: 'Golfing',
      text: `For my summer job in college I worked Grounds Crew at a country club 
        in Bozeman, MT. With free golf as a perk, I was able to hone my skills
        and take on a new hobby. Fun fact: I hit my irons/driver left handed but
        putt right handed...I also putt like Happy Gilmore.`,
      imageUrl: '../src/assets/images/golf.jpg',
      reverse: true,
      primary: false,
    },
    // ... add more activities as needed
  ];

  const gameItems = [
    {
      name: 'Secret of Mana',
      info: '',
      img:
        'https://cdn.mobygames.com/0f33ad74-aba6-11ed-aaf5-02420a00019c.webp',
    },
    {
      name: 'Zelda: A Link to the Past',
      info: '',
      img:
        'https://cdn.mobygames.com/ed7fd308-aba3-11ed-8bb9-02420a000197.webp',
    },
    {
      name: 'Super Mario World',
      info: '',
      img:
        'https://cdn.mobygames.com/f8ea49cc-abbb-11ed-9ae2-02420a0001a0.webp',
    },
    {
      name: 'Donkey Kong Country',
      info: '',
      img:
        'https://cdn.mobygames.com/09e76136-aba5-11ed-9e18-02420a00019a.webp',
    },
    {
      name: 'Super Star Wars',
      info: '',
      img:
        'https://cdn.mobygames.com/07ce1c5e-aba6-11ed-b165-02420a000198.webp',
    },
  ];

  const movieItems = [
    {
      name: 'Stand By Me',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vz0w9BSehcqjDcJOjRaCk7fgJe7.jpg',
    },
    {
      name: 'Blow',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yYZFVfk8aeMP4GxBSU9MTvqs9mJ.jpg',
    },
    {
      name: 'Star Wars Episode III',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg',
    },
    {
      name: 'LOTR: Return of the King',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    },
    {
      name: 'Forrest Gump',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    },
  ];

  const tvItems = [
    {
      name: 'Band of Brothers',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bF0o2cJFVM4JPIOTc4GVMho7fkj.jpg',
    },
    {
      name: 'Seinfeld',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg',
    },
    {
      name: 'Boy Meets World',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/75a5z9zkh8Rg5lnmWlpEQ2V8rVT.jpg',
    },
    {
      name: 'Ozark',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m73bD8VjibSKuTWg597GQVyVhSb.jpg',
    },
    {
      name: 'Game of Thrones',
      info: '',
      img:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    },
  ];

  const sportingEvents = [
    {
      name: 'UFC Events',
      info: '',
      img: 'https://www.rockawave.com/wp-content/uploads/2021/11/UFC-LOGO.png',
    },
    {
      name: 'College Football Saturdays',
      info: '',
      img:
        'https://upload.wikimedia.org/wikipedia/en/d/dd/2015_ESPN_College_GameDay_logo.png',
    },
    {
      name: 'NFL Sundays',
      info: '',
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png',
    },
    {
      name: 'NHL Playoffs',
      info: '',
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/640px-05_NHL_Shield.svg.png',
    },
    {
      name: 'NBA Playoffs',
      info: '',
      img:
        'https://w7.pngwing.com/pngs/292/377/png-transparent-nba-logo-2017u201318-nba-season-los-angeles-lakers-brooklyn-nets-logo-basketball-nba-background-blue-text-trademark-thumbnail.png',
    },
  ];

  const allItems = [];
  allItems.push({ name: 'Top SNES Games', items: gameItems });
  allItems.push({ name: 'Top Movies', items: movieItems });
  allItems.push({ name: 'Top TV Shows', items: tvItems });
  allItems.push({ name: 'Top Sporting Events', items: sportingEvents });

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

      <div className="w-full">
        <h1 className="text-center text-4xl md:text-6xl font-bold mt-8 mb-8">
          Top 5 Lists
        </h1>
        <div className="flex flex-wrap m-2">
          {allItems.map((list, i) => (
            <ProjectCard key={i} name={list.name} items={list.items} />
          ))}
        </div>
      </div>

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
