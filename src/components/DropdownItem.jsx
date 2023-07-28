import { CSSTransition } from 'react-transition-group';

const DropdownItem = ({ item, activeItem, onClick }) => {
  return (
    <li className="cursor-pointer" onClick={() => onClick(item)}>
      {item.name}
      <CSSTransition
        in={activeItem === item}
        timeout={500}
        classNames="item"
        unmountOnExit
      >
        <div>
          <img
            src={item.img}
            alt={item.name}
            className="w-auto h-32 object-cover mt-2"
          />
          {item.info}
        </div>
      </CSSTransition>
    </li>
  );
};

export default DropdownItem;
