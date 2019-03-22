import React from "react";

const Key = props => {
  return (
    <div class="type">
      <div
        class={`colorPicker${props.index + 1}`}
        onClick={() => props.handleType(props.type)}
      />
      <p>{props.type}</p>
    </div>
  );
};
export default Key;
