import React from "react";
import { css } from "goober";
import TodoList from "./todo-list";

const Container = css`
  font-family: "Poller One", cursive;
  font-family: Poller One;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #000272;
`;

const buttonContainer = css`
  max-width: 360px;
  width: 100%;
  margin: 0px auto;
  height: auto;
`;

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
`;

const button = css`
  background: #ffffff;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 8px;
`;

const buttonText = css`
  color: #000272;
  font-family: "Poller One", cursive;
  font-family: Poller One;
`;

const todoContainer = css`
  max-width: 720px;
  background: white;
  max-height: 300px;
  min-height: 300px;
  height: 100%;
  width: 100%;
  margin: 32px auto;
  border-radius: 16px;
  padding: 32px 32px 32px 32px;

`;

const todoFormContainer = css`
  height: 138px;
  width: 100%;
  max-width: 540px;
  position: relative;
  top: -100px;
  margin: 0px auto;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 2, 114, 0.25);
  border-radius: 18px;
  z-index: 999;
  display:flex;
  flex-direction:column;
  padding:16px;



  input,textarea {
    border:none;
    outline:none;
    width:80%;
    height:auto;
    padding:4px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sana", sans-serif;
    resize:none;
    margin:6px 0px;
  }
`;

const userAvatar = css`
 bottom:32px;
 right:32px;
 position:absolute;
`

const authorContainer = css`
display:flex;
place-items:center;
width:auto;
height:auto;
img{
  width: 45px;
height: 45px;
border: 4px solid #000272;
border-radius:50%;
margin-right:8px;

}

p{
  margin:0px;
  padding:0px;

  a{
    text-decoration:none;
    color:#341677;
    font-family: "Noto Sana", sans-serif;
  }
}
`


export default function ViewTodo() {
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
            <p className={buttonText}>⏳ Upcoming</p>
          </button>
        </div>
      </div>
      <div className={todoContainer}>
        <TodoList />
      </div>
          <section className={todoFormContainer}>
            <input 
            placeholder="Task Title"
            />
            <textarea placeholder="Task Description" />
          </section>
          <div className={userAvatar}>
            <div className={authorContainer}>
              <img src="https://pbs.twimg.com/profile_images/1116257631981666305/-3z2O_Mt_400x400.png" />
              <p>by <a href="https://twitter.com/erastusae" target="_blank">Erastus Ruiru</a></p>
            </div>
            </div>
    </>
  );
}
