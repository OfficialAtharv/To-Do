import { useState } from "react";
import "./App.css";
import AddToDo from "./componants/AddToDo";
import AppName from "./componants/AppName";
import Items from "./componants/Items";
import Welcomemessage from "./componants/Welcomemessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const handelNewItem = (itemName, itemDueDate) => {
    console.log(`New item added : ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, toduedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const HandelDeleteItem =(todoItemName) =>{
    const newToDoItem = todoItems.filter(item=> item.name !== todoItemName);
    setTodoItems(newToDoItem);
    console.log(`item deleted:${todoItemName}`);
  }
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo onNewItem={handelNewItem} />
        {todoItems.length ===0 &&<Welcomemessage></Welcomemessage>}
        <Items Items={todoItems} onDeleteClick={HandelDeleteItem}></Items>
      </center>
    </>
  );
}

export default App;
