import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description1",
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description1",
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description1",
  },
  {
    id: uuidv4(),
    title: "todo4",
    desc: "todo4 description1",
  },
];
const List = () => {
  return (
    <div>
      {todos.map((todo, index) => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h1>{desc}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default List;
