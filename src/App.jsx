import Header from "./Header";
import DateHeader from "./DateHeader";
import Item from "./Item";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const itemValue = sessionStorage.getItem("listSession");
  const initialList = itemValue ? JSON.parse(itemValue) : [];
  const [list, setTask] = useState(initialList);

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
        sessionStorage.setItem("listSession", JSON.stringify(temp));
        return temp;
      });
      setInput({ time: "", task: "" });
    } else {
      const errorClass = "no-input-error";
      if (input.time === "" && input.task === "") {
        document.getElementById("time").classList.add(errorClass);
        document.getElementById("task").classList.add(errorClass);
        setTimeout(() => {
          document.getElementById("time").classList.remove(errorClass);
          document.getElementById("task").classList.remove(errorClass);
        }, 2000);
      } else if (input.time === "") {
        document.getElementById("time").classList.add(errorClass);
        setTimeout(() => {
          document.getElementById("time").classList.remove(errorClass);
        }, 2000);
      } else {
        document.getElementById("task").classList.add(errorClass);
        setTimeout(() => {
          document.getElementById("task").classList.remove(errorClass);
        }, 2000);
      }
    }
    event.preventDefault();
  }

  function deleteTask(id) {
    setTask((prevInput) => {
      const updatedList = prevInput.filter((inputItem, index) => {
        return index !== id;
      });
      sessionStorage.setItem("listSession", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  let content;
  if (list.length === 0) {
    content = <Item time='now' task='Add new task down below!' delete={0} />;
  } else {
    content = list.map((task, index) => {
      return (
        <Item
          time={task.time}
          task={task.task}
          key={index}
          id={index}
          delete={1}
          deleteTask={deleteTask}
        />
      );
    });
  }

  return (
    <div>
      <Header />
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
