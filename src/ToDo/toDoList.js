import { useState } from "react";

export function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");
 

  function handOnClickSubmit(event) {
    setValue(event.target.value);
    console.log(value);
  }

  
  const addToDo = () => {
    if (value !== "") {
      const addDetails = {
        id: Date.now(),
        task: value,
        isCompleted: false,
        isDeleted: false,
       
      
      };
      setToDoList([...toDoList, addDetails]);
      console.log(addDetails);

      setValue("");
    }
  };

  const completeTodo = (e, id) => {
    //find id
    const element = toDoList.findIndex((elem) => elem.id === id);

    const newList = [...toDoList];

    newList[element] = {
      ...newList[element],
      isCompleted: true,
      isDeleted: false,
    };
    setToDoList(newList);
  };

  const removeTodo = (e, id) => {
    toDoList.find((element) => {
      if (element.id === id) {
        element.isDeleted = true;
      }
    });
    setToDoList([...toDoList]);
  };

  const undoTask = (id) => {
    toDoList.find((element) => {
      if (element.id === id) {
        element.isDeleted = false;
      }
    });
    setToDoList([...toDoList]);
  };

 

  return (
    <body className="Body">
      <div className="App">
        <div className="Pending">
          <h1>
            Pending Task (
            {
              toDoList.filter(
                (elemnt) => !elemnt.isCompleted && !elemnt.isDeleted
              ).length
            }
            )
          </h1>

          {toDoList !== []}
          <ul>
            {toDoList.map(
              (todo) =>
                todo.isDeleted === false && (
                  <li className={todo.isCompleted ? "crossText" : "listItems"}>
                    {todo.task}
                    <button
                      className="complete"
                      onClick={(e) => completeTodo(e, todo.id)}
                    >
                      complete
                    </button>
                    <button
                      className="delete"
                      onClick={(e) => removeTodo(e, todo.id)}
                    >
                      x
                    </button>

                   
                  </li>
                )
            )}
          </ul>
          <input 
            id="text"
            value={value}
            type="text"
            placeholder="enterTodo"
            name=""
            onChange={handOnClickSubmit}
          />
          <input type="button" value="submit" onClick={addToDo} />
        </div>
        <div className="Pending">
          <h1>
            {" "}
            Deleted Task (
            {
              toDoList.filter(
                (elemnt) => elemnt.isDeleted && elemnt.isCompleted === false
              ).length
            }
            ){" "}
          </h1>
          <ul>
            {" "}
            {toDoList.map(
              (element) =>
                element.isDeleted === true &&
                element.isCompleted === false && (
                  <li
                    style={{
                      textDecoration:
                        element.isCompleted === true ? "line-through" : "none",
                    }}
                  >
                    <span>{element.task}</span>
                    <button
                      className="complete"
                      onClick={() => undoTask(element.id)}
                    >
                      Undo
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </body>
  );
}
