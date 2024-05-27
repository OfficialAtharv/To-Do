// eslint-disable-next-line react/prop-types
function ToDoItems({ todoDate, todoName,onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className=" kg-buuton btn btn-danger" onClick={()=>onDeleteClick(todoName) }>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItems;
