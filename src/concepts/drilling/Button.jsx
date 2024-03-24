import React from "react";

function Button({ isLoading, onClickSubmit }) {
  return (
    <button onClick={onClickSubmit} disabled={isLoading}>
      {isLoading ? "Loading" : "Submit"}
    </button>
  );
}

export default Button;