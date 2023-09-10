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

    function handleSubmit(event) {
        const canSubmit = input.time !== "" && input.task !== "";
        if (canSubmit) {
            setList((prevInputs) => {
                const temp = [...prevInputs, input];
                temp.sort((a, b) => a.time.localeCompare(b.time));
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
