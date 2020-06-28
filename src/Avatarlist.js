import React from "react";

const Avatarlist = (props) => {
  return (
    <div className="avatarstyle ma4 bg-light-purple dib pa3 shadow-4 grow tc">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="" />
      <h1> {props.name} </h1>
      <p> {props.work} </p>
    </div>
  );
};

export default Avatarlist;
