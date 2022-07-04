import React, { useState } from "react";

const Button = ({ defaultStyle, hoveredStyle, contents, clicked }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`${hovered ? hoveredStyle : ""} ${defaultStyle}`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={clicked}
      >
        {contents}
      </div>
    </>
  );
};

export default Button;
