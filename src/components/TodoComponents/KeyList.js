import React from "react";

const KeyList = props => {
  console.log(props);
  return (
    <div class="key">
      {props.types.map((type, i) => (
        <div class="type">
          <div
            class={`colorPicker${i + 1}`}
            onClick={() => props.handleType(type)}
          />
          <p>{type}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyList;
