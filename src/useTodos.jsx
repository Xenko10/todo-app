import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodos() {
  const itemValue = sessionStorage.getItem("listSession");
  const initialList = itemValue ? JSON.parse(itemValue) : [];
  const [list, setList] = useState(initialList);

  const [input, setInput] = useState({ time: "", task: "" });

  const [isTaskError, setIsTaskError] = useState(false);
  const [isTimeError, setIsTimeError] = useState(false);

  function isDuplicate(input) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].time === input.time && list[i].task === input.task) {
        return true;
      }
    }
    return false;
  }

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
    if (isDuplicate(input)) {
      onError();
      return;
    }
    const toSubmit = {
      ...input,
      id: uuidv4(),
    };
    setList((prevInputs) => {
      const temp = [...prevInputs, toSubmit];
      temp.sort((a, b) => a.time.localeCompare(b.time));
      sessionStorage.setItem("listSession", JSON.stringify(temp));
      return temp;
    });
    setInput({ time: "", task: "" });
  }

  function onError() {
    if (input.time === "" || isDuplicate(input)) {
      setIsTimeError(true);
      setTimeout(() => {
        setIsTimeError(false);
      }, 2000);
    }
    if (input.task === "" || isDuplicate(input)) {
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
