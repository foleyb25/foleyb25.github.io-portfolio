import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import selfPortrait from '/src/assets/images/Self-Portrait.webp';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import backgroundImageNight from '/src/assets/images/desert_planet_landscape-night-min.webp';
import backgroundImageDay from '/src/assets/images/desert_planet_landscape-day-min.webp';

const Home = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className="bg-primary text-primary min-h-screen">
      <section
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImageNight : backgroundImageDay
          })`,
        }}
        className="relative flex flex-col md:flex-row  justify-center items-center min-h-screen px-8 py-16 bg-cover"
      >
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`relative w-full md:w-1/2 p-4 transition-all duration-500 ${
                inView ? 'animate-slide-left' : ''
              }`}
            >
              <div className="flex flex-col justify-center items-center backdrop-blur-lg p-[20px] rounded-2xl">
                <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Brian Foley
                </h1>
                <h3 className="text-1xl md:text-2xl text-center font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Delivering dynamic web experiences with the power of modern
                  tech stacks
                </h3>

                <Link
                  to="/portfolio"
                  className="mt-4 px-4 py-2 w-1/2 rounded block text-center bg-primary"
                >
                  View My Work
                </Link>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full md:w-1/2 p-4 flex flex-col items-center transition-all duration-500 ${
                inView ? 'animate-slide-right' : ''
              }`}
            >
              <img
                src={selfPortrait}
                alt="Brian Foley"
                className="w-3/4 md:w-1/2 aspect-square rounded-full shadow-sm isolate"
              />
            </div>
          )}
        </InView>
      </section>
    </div>
  );
};

export default Home;
