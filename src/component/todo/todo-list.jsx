import React, { useState } from "react";
import Checkbox from "./checkbox";
import {
  ListContainer,
  ListContent,
  ListItem,
  ListItems,
  modalContainer,
  modalHeader,
  buttonWrapper,
  actionButtons,
  actionBtnText,
  closeButton,
} from "./styles";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as ReactLogo } from "../../box.svg";

export default function TodoList() {
  const [load, setLoading] = useState(true);
  const [todoData, setData] = useState([]);
  const [actionSheet, setActionSheet] = useState(false);
  const [singleItem, setSingleItem] = useState({});

  const onClickItem = (data) => {
    setActionSheet(true);
    setSingleItem(data);
  };

  const options = {
    url: "http://localhost:3000/api/todos",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("todoToken")}`,
    },
  };

  const fetchData = async () => {
    await axios(options)
      .then((res) => {
        if (res.status === 200) {
          setLoading(() => false);
          setData((prev) => [...prev, ...res.data.todos]);
        }
      })
      .catch((err) => {
        // console.log("log",err)
      });
  };

  console.log("data", singleItem, Object.keys(singleItem).length > 0);

  useEffect(() => {
    fetchData();
    console.log("data", singleItem);
  }, []);

  return (
    <ListContainer>
      {todoData.length === 0 ? (
        <div>
          <ReactLogo
            style={{
              height: 153,
              width: 136,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginLeft: `45%`,
              marginTop: `5%`,
            }}
          />
          <p
            style={{
              justifyContent: "center",
              margin: `30px auto 20px 90px`,
              color: "#341677",
              fontSize: "18px",
              fontFamily: ` "Noto Sana", sans-serif`,
            }}
          >
            You have no todo items use the floating box below to create one
          </p>
        </div>
      ) : (
        Array.isArray(todoData) &&
        todoData.length > 0 &&
        todoData.map((data) => (
          <ListItems key={data._id}>
            <ListItem>
              <Checkbox
                checked={data.completed}
                onChecked={() => {}}
                uniqueID={1}
              />
              <ListContent>
                <h2 onClick={() => onClickItem(data)}>{data.task}</h2>
                <p>{data.description}</p>
                <p>{data.duration}</p>
              </ListContent>
            </ListItem>
          </ListItems>
        ))
      )}
      {actionSheet && Object.keys(singleItem).length > 0 && (
        <div className={modalContainer}>
          <div className={modalHeader}>
            <p>Todo Actions</p>
            <button onClick={() => setActionSheet(false)} className={closeButton}>❌</button>
          </div>
          <input placeholder="Task Title" value={singleItem.task} readOnly/>
          <textarea placeholder="Task Description" value={singleItem.description} readOnly />
          <input placeholder="Duration" value={singleItem.duration} readOnly />
          <div className={buttonWrapper}>
            <button className={actionButtons}>
              <p className={actionBtnText}>✒️ Save Changes</p>
            </button>
            <button className={actionButtons}>
              <p className={actionBtnText}>🗑️ Delete</p>
            </button>
          </div>
        </div>
      )}
    </ListContainer>
  );
}
