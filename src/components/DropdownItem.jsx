import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const DropdownItem = ({ item, activeItem, onClick }) => {
  return (
    <li className="m-1 cursor-pointer md:underline-animation md:dark:underline-animation-dark">
      <div className="flex flex-row items-center justify-center">
        {item.name}
        <button
          className="ml-2 p-2 w-[36px] aspect-square bg-transparent rounded inline-flex items-center justify-center"
          onClick={() => onClick(item)}
        >
          <FontAwesomeIcon
            icon={activeItem === item ? faCaretDown : faCaretRight}
            className="text-black"
          />
        </button>
      </div>
      <CSSTransition
        in={activeItem === item}
        timeout={500}
        classNames="item"
        unmountOnExit
      >
        <div className="w-full flex items-center justify-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-auto h-32 object-fit mt-2 rounded"
          />
          {item.info}
        </div>
      </CSSTransition>
    </li>
  );
};

export default DropdownItem;
