import { useState } from "react";
import TodoList from "./todo-list";
import {
  Container,
  buttonContainer,
  buttonWrapper,
  button,
  buttonText,
  todoContainer,
  todoFormContainer,
  userAvatar,
  authorContainer,
  disableButton,
} from "./styles";
import axios from "axios";

export default function ViewTodo() {
  const [initialState, setState] = useState({
    taskTitle: "",
    taskDetails: "",
    taskDuration: "",
    fetchAgain: false,
  });

  const setValues = (val) => {
    const VALUE = val.target.value;
    const NAME = val.target.name;

    setState((prev) => ({
      ...prev,
      [NAME]: VALUE,
    }));
  };

  const options = {
    url: "http://localhost:3000/api/todo",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("todoToken")}`,
    },
    data: {
      task: initialState.taskTitle,
      description: initialState.taskDetails,
      duration: initialState.taskDuration,
    },
  };

  const postData = async () => {
    await axios(options)
      .then((res) => {
        if (res.status === 201) {
          console.log("res res", res);
        }
      })
      .catch((err) => {
        // console.log("log",err)
      });
  };

  const buttonActive = () => {
    let active = true;
    if (
      initialState.taskTitle.length > 3 &&
      initialState.taskDetails.length > 3 &&
      initialState.taskDuration.length > 3
    ) {
      active = false;
    }
    return active;
  };

  console.log(")))))))))", buttonActive());

  return (
    <>
      <div className={Container}>
        <h1>Quill</h1>
      </div>
      <div className={buttonContainer}>
        <div className={buttonWrapper}>
          <button className={button}>
            <p className={buttonText}>📥 Inbox</p>
          </button>
          <button className={button}>
            <p className={buttonText}>📅 Today</p>
          </button>
          <button className={button}>
            <p className={buttonText}>📊 Stats</p>
          </button>
        </div>
      </div>
      <div className={todoContainer}>
        <TodoList />
      </div>
      <section className={todoFormContainer}>
        <input
          placeholder="Task Title"
          name="taskTitle"
          value={initialState.taskTitle}
          onChange={(e) => setValues(e)}
        />
        <input
          name="taskDetails"
          placeholder="Task Description"
          onChange={(e) => setValues(e)}
        />
        <input
          name="taskDuration"
          placeholder="Task Duration"
          onChange={(e) => setValues(e)}
        />

        <button
          className={buttonActive() ? disableButton : button}
          disabled={true}
        >
          <p className={buttonText} onClick={() => postData()}>
            💾 Save
          </p>
        </button>
      </section>
      <div className={userAvatar}>
        <div className={authorContainer}>
          <img
            src="https://pbs.twimg.com/profile_images/1116257631981666305/-3z2O_Mt_400x400.png"
            alt=""
          />
          <p>
            by{" "}
            <a href="https://twitter.com/erastusae" target="_blank" rel="noreferrer">
              Erastus Ruiru
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
