/* eslint-disable react/prop-types */
import ToDoItems from "./ToDoItems";

const Items = ({ Items,onDeleteClick }) => {
  return (
    <>
      <div className="item-container">
        {Items.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <ToDoItems todoDate={item.toduedate} todoName={item.name} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </>
  );
};

export default Items;
