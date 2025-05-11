import React from "react";

const Color = (props) => {
  const { color } = props;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "200px",
        aspectRatio: 1 / 1,
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "white",
          
        }}
      >
        {color}
      </p>
    </div>
  );
};

export default Color;
