import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddToDo({ onNewItem }) {
  const [todoname, setTodoName] = useState();
  const [dueDtae, setduedate] = useState();
  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setduedate(event.target.value);
  };
  const HandelAddButtonClicked = () => {
    onNewItem(todoname, dueDtae);
    setduedate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            name=""
            id=""
            value={todoname}
            onChange={handelNameChange}
            placeholder="Enter to Do here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDtae}
            onChange={handelDateChange}
            name=""
            id=""
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className=" kg-buuton btn btn-success"
            onClick={HandelAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
