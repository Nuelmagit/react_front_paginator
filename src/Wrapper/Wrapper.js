import React from "react";

const Wrapper = (props) => {
  const items = props.items.map((item, index) => {
    return <li key={item.id}> {item.title} </li>;
  });

  return (
    <div>
      <h1> {props.currentPage} </h1>
      <button onClick={props.prevHandler}> Prev </button>
      <button onClick={props.nextHandler}> Next </button>
      <h2> Items: </h2>
      <ul> {items} </ul>
    </div>
  );
};

export default Wrapper;
