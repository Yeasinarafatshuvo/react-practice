import React from "react";
import { v4 as uuidv4 } from "uuid";
const users = [
  {
    fullName: "Yeasin Arafat",
    age: 26,
    phones: [
      {
        home: "01779930077",
        office: "01894886171",
      },
    ],
  },
  {
    fullName: "Ariful  Islam",
    age: 26,
    phones: [
      {
        home: "01779930000",
        office: "01894886172",
      },
    ],
  },
];
const NestedMap = () => {
  return (
    <div>
      <h1>Nested List</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>Home: {phone.home}</p>
              <p>Home: {phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};
export default NestedMap;
