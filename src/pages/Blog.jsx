import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import backgroundImageDay from '/src/assets/images/AI-future-day-min.webp';
import backgroundImageNight from '/src/assets/images/AI-future-night-min.webp';
import { blogs } from '/src/blogs/blog.js';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  let gridCols = 'grid-cols-1';
  if (blogs.length === 2) {
    gridCols = 'grid-cols-2';
  } else if (blogs.length === 3) {
    gridCols = 'grid-cols-3';
  } else if (blogs.length >= 4) {
    gridCols = 'grid-cols-4';
  }

  return (
    <div className="bg-primary text-primary min-h-screen">
      {/* Full-width hero banner */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImageNight : backgroundImageDay
          })`,
        }}
      />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        {blogs.length > 0 ? (
          <div className={`grid md:${gridCols} grid-cols-1 gap-4`}>
            {blogs.map(blog => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="group">
                <div className="p-4 border rounded hover:shadow-lg transition-shadow">
                  <div className="w-full aspect-video rounded-t">
                    <img
                      src={blog.imageURL}
                      alt={blog.title}
                      className="h-full w-full object-cover rounded-t"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="mb-2 truncate">{blog.metadata}</p>
                  <small className="text-gray-500">
                    By {blog.author} on{' '}
                    {new Date(blog.timeCreated).toLocaleDateString()}
                  </small>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No blogs to show yet...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
