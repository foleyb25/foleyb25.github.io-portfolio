import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Blog = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const backgroundImagePathNight =
    '../src/assets/images/AI-future-night-min.png';
  const backgroundImagePathDay = '../src/assets/images/AI-future-day-min.png';

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
    </div>
  );
};

export default Blog;
