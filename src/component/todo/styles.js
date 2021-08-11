import { styled, css } from "goober";

export const HomeContainer = styled("section")`
  background: #ff6363 !important;
  height: ${window.innerHeight};
  widht: 100vw;
`;

export const ListContainer = styled("section")`
  width: 100%;
  overflow-y: scroll;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 32px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000272;
    outline: none;
  }
`;

export const ListItems = styled("ul")`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
`;

export const ListItem = styled("li")`
  border-bottom: 1px solid rgba(255, 99, 99, 0.2);
  padding: 11px 0px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-column-gap: 8px;
  grid-row-gap: 0px;
`;

export const ListContent = styled("section")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 8px;
  grid-row-gap: 0px;

  h2 {
    margin: 0px;
    padding: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sans", sans-serif;
    color: #341677;
    cursor: pointer;

    ${(props) =>
      props.checked && `text-decoration-line: line-through; opacity: 0.5;`};
  }

  p {
    margin: 0px;
    padding: 0px;
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #a32f80;

    ${(props) =>
      props.checked && `text-decoration-line: line-through; opacity: 0.5;`};
  }
`;

export const CheckboxContainer = styled("section")`
  background: #ff6363;
  border-radius: 8px;
  height: 24px;
  width: 24px;
  padding: 4px;
  display: flex;
  justify-content: center;
  place-items: center;

  .checked__span {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    background: #000272;

    ${(props) =>
      props.checked
        ? `
    display: block; 
  `
        : `display: none;`}
  }
`;

export const modalContainer = css`
  background: white;
  width: 100%;
  min-width: 260px;
  height: 100%;
  min-height: 150px;
  max-height: 280px;
  max-width: 300px;
  margin: 30px auto;
  border-radius: 16px;
  padding: 28px 32px 32px 32px;
  position: absolute;
  bottom: 50%;
  transform: translate(0%, 50%);
  right: 50px;

  input,
  textarea {
    border: none;
    outline: none;
    width: 80%;
    height: auto;
    padding: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sana", sans-serif;
    resize: none;
    margin: 16px 0px;
    color: #a32f80;

    &::placeholder {
      font-size: 14px;
      font-family: "Noto Sana", sans-serif;
      color: #341677;
    }
  }
`;

export const modalHeader = css`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  grid-column-gap: 8px;
  grid-row-gap: 0px;
  align-items: center;
  place-items: center;

  p {
    color: #ff6363;
  }
`;

export const button = css`
  background: #ffffff;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 8px;
  cursor:pointer;
`;


export const disableButton = css`
  background: #ffffff;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 8px;
  cursor:pointer;
  pointer-events:none;
`;


export const closeButton = css`
  ouline: none;
  border: none;
  background: none;
  cursor: pointer;
`;

// starts hererrr

export const Container = css`
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

export const buttonContainer = css`
  max-width: 360px;
  width: 100%;
  margin: 0px auto;
  height: auto;
`;

export const buttonWrapper = css`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
`;

export const actionButtons = css`
  background: #000272;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 8px;
`;

export const actionBtnText = css`
  color: #ff6363;
  font-family: "Poller One", cursive;
  font-family: Poller One;
`;

export const buttonText = css`
  color: #000272;
  font-family: "Poller One", cursive;
  font-family: Poller One;
`;

export const todoContainer = css`
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

export const todoFormContainer = css`
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
  display: flex;
  flex-direction: column;
  padding: 16px;

  input,
  textarea {
    border: none;
    outline: none;
    width: 80%;
    height: auto;
    padding: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sana", sans-serif;
    resize: none;
    margin: 5px 0px;
    resize: none;
  }
`;

export const userAvatar = css`
  bottom: 32px;
  right: 32px;
  position: absolute;
`;

export const authorContainer = css`
  display: flex;
  place-items: center;
  width: auto;
  height: auto;
  img {
    width: 45px;
    height: 45px;
    border: 4px solid #000272;
    border-radius: 50%;
    margin-right: 8px;
  }

  p {
    margin: 0px;
    padding: 0px;

    a {
      text-decoration: none;
      color: #341677;
      font-family: "Noto Sana", sans-serif;
    }
  }
`;
