import { blogs } from '/src/blogs/blog.js';
import { useParams } from 'react-router-dom';

const BlogView = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <div className="p-8 text-xl font-bold">Blog not found</div>;

  return (
    <div className="bg-primary text-primary min-h-screen">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-2 text-accent-primary">
            {blog.title}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="">
              {new Date(blog.timeCreated).toLocaleDateString()}
            </span>
            <span className="">By {blog.author}</span>
          </div>
        </div>

        {/* Content */}
        {blog.imageURL && (
          <div className="mb-8">
            <img
              src={blog.imageURL}
              alt={blog.title}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        )}
        <p className="text-lg leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogView;
