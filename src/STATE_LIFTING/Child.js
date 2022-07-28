import React from "react";

const Child = (props) => {
  const childData = "I am from parent data";
  props.onchildData(childData);
  return (
    <div>
      <p>{props.data1}</p>
    </div>
  );
};
export default Child;
