
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">

       <IoMdCheckmarkCircleOutline
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
          onClick={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{ props.text}</p>
  
      <TiDeleteOutline className="Icon Icon-delete"
        onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };