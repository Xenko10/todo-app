import {useState} from "react";

export default function useTodos() {
    const itemValue = sessionStorage.getItem("listSession");
    const initialList = itemValue ? JSON.parse(itemValue) : [];
    const [list, setList] = useState(initialList);

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

    function submit() {
        setList((prevInputs) => {
            const temp = [...prevInputs, input];
            temp.sort((a, b) => a.time.localeCompare(b.time));
            sessionStorage.setItem("listSession", JSON.stringify(temp));
            return temp;
        });
        setInput({ time: "", task: "" });
    }

    function onError() {
        const errorClass = "no-input-error";
        if (input.time === "") {
            const timeElement = document.getElementById("time");
            timeElement.classList.add(errorClass);
            setTimeout(() => {
                timeElement.classList.remove(errorClass);
            }, 2000);
        }
        if (input.task === "") {
            const taskElement = document.getElementById("task");
            taskElement.classList.add(errorClass);
            setTimeout(() => {
                taskElement.classList.remove(errorClass);
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
                return index !== id;
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
    }
}
