import React from "react";

const Link = (props) => {
  const { id, name, path } = props.route;
  return (
    <li className="mr-10 hover:bg-purple-600 mt-2 font-bold">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
