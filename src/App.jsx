import DateHeader from "./DateHeader";
import Item from "./Item";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [list, setTask] = useState([]);

  const [input, setInput] = useState({ time: "", task: "" });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    if (input.time !== "" && input.task !== "") {
      setTask((prevInputs) => {
        const temp = [...prevInputs, input];
        temp.sort(function (a, b) {
          return a.time.localeCompare(b.time);
        });

        return temp;
      });
      setInput({ time: "", task: "" });
    } else {
      // error
    }
    event.preventDefault();
  }

  function deleteTask(id) {}

  let content;
  if (list.length === 0) {
    content = <Item time='now' task='Add new task down below!' delete={0} />;
  } else {
    content = list.map((task, index) => {
      return <Item time={task.time} task={task.task} key={index} delete={1} />;
    });
  }

  return (
    <div className='todo-app'>
      <div className='todo-display'>
        <DateHeader />
        {content}
        <Form
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          values={input}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
