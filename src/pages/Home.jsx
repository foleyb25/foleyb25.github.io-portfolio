import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import selfPortrait from '/src/assets/images/Self-Portrait.webp';

const Home = () => {
  return (
    <div className="bg-primary text-primary min-h-screen">
      <section className="flex flex-col md:flex-row bg-[url(../src/assets/images/desert_planet_landscape-day-min.webp)] dark:bg-[url(../src/assets/images/desert_planet_landscape-night-min.webp)] justify-center items-center min-h-screen px-8 py-16 bg-cover">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full md:w-1/2 p-4 transition-all duration-500 ${
                inView ? 'animate-slide-left' : ''
              }`}
            >
              <div className="flex flex-col justify-center items-center backdrop-blur-sm p-[20px] rounded-2xl">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                  Brian Foley
                </h1>
                <h3 className="text-1xl md:text-2xl text-center font-medium">
                  Delivering dynamic web experiences with the power of modern
                  tech stacks
                </h3>
                <p className="text-base md:text-lg my-4 text-center">
                  A full-stack web engineer specializing in MongoDB, VueJS, and
                  ReactJS with over 2 years of experience. Committed to
                  delivering high-quality, user-friendly applications for a
                  dynamic web experience.
                </p>

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
                className="w-3/4 md:w-1/2 aspect-square rounded-full"
              />
              <div className="mt-4 flex gap-4 backdrop-blur-sm p-[20px] rounded-xl">
                <a
                  href="https://github.com/foleyb25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="text-2xl"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/brian-foley-456624196/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    className="text-2xl"
                  />
                </a>
              </div>
            </div>
          )}
        </InView>
      </section>
    </div>
  );
};

export default Home;
