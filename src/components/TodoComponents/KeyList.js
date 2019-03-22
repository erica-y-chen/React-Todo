import React from "react";
import Key from "./Key";
const KeyList = props => {
  return (
    <div class="key">
      {props.types.map((type, i) => (
        <Key key={i} type={type} index={i} handleType={props.handleType} />
      ))}
    </div>
  );
};

export default KeyList;
