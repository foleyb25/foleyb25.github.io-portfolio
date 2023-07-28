import { useState } from 'react';
import '../assets/styling/components/ProjectCard.css';
import DropdownItem from './DropdownItem';

const ProjectCard = ({ items }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = () => {
    setIsFlipped(true);
  };

  const handleItemClick = item => {
    if (activeItem === item) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  return (
    <div className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="face h-full w-full front border rounded shadow-md p-4 overflow-auto">
          <button
            className="w-full h-full flex items-center justify-center text-xl font-bold"
            onClick={handleClick}
          >
            View
          </button>
        </div>
        <div className="face back flex items-center justify-center border rounded shadow-md p-4">
          <div>
            <ul className="list-decimal p-2">
              {items.map((item, index) => (
                <DropdownItem
                  key={item.name}
                  item={item}
                  index={index}
                  activeItem={activeItem}
                  onClick={handleItemClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
