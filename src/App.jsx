

import React,{useReducer} from "react";
import './App.css';


const initialState = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'add_task':
      return { tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }] };
    case 'toggle_task':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, completed: !task.completed } : task)
      };
    case 'delete_task':
      return {
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'add_task', text: taskText });
    setTaskText("");
  }


  return(
<div>
<form onSubmit={handleSubmit}>
  <input value={taskText} onChange={e => setTaskText(e.target.value)}/>
  <button type="submit">Add Task</button>
</form>
{state.tasks.map(task => (
  <div key={task.id}>
  <input
  type="checkbox"
  checked={task.compled}
  onChange={() => dispatch({type: 'toggle_task', id: task.id})}
  />
  {task.text}
  <button onClick={() => dispatch({type: 'delete_task', id: task.id})}>Delete</button>
  </div>
))}

</div>
  )
}

export default App;
