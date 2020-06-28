import React from "react";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

const Avatar = (props) => {
  const avatarlistarray = [
    {
      id: 1,
      name: "Fozan",
      work: "Web Developer",
    },
    {
      id: 2,
      name: "John",
      work: "Frontend Developer",
    },
    {
      id: 3,
      name: "Simon",
      work: "Database",
    },
    {
      id: 4,
      name: "Joe",
      work: "Backend Developer",
    },
  ];

  avatarlistarray.map((avatarcard, i) => {
    return (
      <Avatarlist
        id={avatarlistarray[i].id}
        name={avatarlistarray[i].name}
        work={avatarlistarray[i].work}
      />
    );
  });

  return (
    <div>
      <h1> Welcome to Avatar World </h1>

      <Avatarlist
        id={avatarlistarray[0].id}
        name={avatarlistarray[0].name}
        work={avatarlistarray[0].work}
      />
      <Avatarlist
        id={avatarlistarray[1].name}
        name={avatarlistarray[1].name}
        work={avatarlistarray[1].work}
      />
      <Avatarlist
        id={avatarlistarray[2].name}
        name={avatarlistarray[2].name}
        work={avatarlistarray[2].work}
      />
      <Avatarlist
        id={avatarlistarray[3].name}
        name={avatarlistarray[3].name}
        work={avatarlistarray[3].work}
      />

      <button> Subscribe </button>
    </div>
  );
};

export default Avatar;
