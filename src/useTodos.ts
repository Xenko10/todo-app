import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodos() {
  const itemValue = sessionStorage.getItem("listSession");
  const initialList = itemValue ? JSON.parse(itemValue) : [];
  const [list, setList] = useState(initialList);

  const [input, setInput] = useState({ time: "", task: "", id: uuidv4() });

  const [isTaskError, setIsTaskError] = useState(false);
  const [isTimeError, setIsTimeError] = useState(false);

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function submit() {
    setList((prevInputs) => {
      const temp = [...prevInputs, input];
      temp.sort((a, b) => a.time.localeCompare(b.time));
      sessionStorage.setItem("listSession", JSON.stringify(temp));
      return temp;
    });
    const uuid = uuidv4();
    setInput({ time: "", task: "", id: uuid });
  }

  function onError() {
    if (input.time === "") {
      setIsTimeError(true);
      setTimeout(() => {
        setIsTimeError(false);
      }, 2000);
    }
    if (input.task === "") {
      setIsTaskError(true);
      setTimeout(() => {
        setIsTaskError(false);
      }, 2000);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const canSubmit = input.time !== "" && input.task !== "";
    if (canSubmit) {
      submit();
      return;
    }
    onError();
  }

  function deleteTask(id) {
    setList((prevInput) => {
      const updatedList = prevInput.filter((inputItem, index) => {
        return inputItem.id !== id;
      });
      sessionStorage.setItem("listSession", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  return {
    list,
    input,
    handleInput,
    handleSubmit,
    deleteTask,
    isTaskError,
    isTimeError,
  };
}
