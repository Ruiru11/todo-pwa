import React, { useState } from "react";
import Checkbox from "./checkbox";
import { ListContainer, ListContent, ListItem, ListItems } from "./styles";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as ReactLogo } from "../../box.svg";

export default function TodoList() {
  const [load, setLoading] = useState(true);
  const [todoData, setData] = useState([]);

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

  useEffect(() => {
    fetchData();
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
          <ListItems>
            <ListItem>
              <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
              <ListContent>
                <h2>{data.task}</h2>
                <p>{data.description}</p>
                <p>{data.duration}</p>
              </ListContent>
            </ListItem>
          </ListItems>
        ))
      )}
    </ListContainer>
  );
}
