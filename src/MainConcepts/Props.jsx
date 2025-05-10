import React from "react";

const Props = (props) => {
  const { name } = props; //props sama seperti javascript argument dan properti pada HTML

  return (
    <div>
      <p>Hello {name} this is from <b>Props</b></p>
    </div>
  );
};

export default Props;
