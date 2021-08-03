import { styled } from "goober";

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
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 1)
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
