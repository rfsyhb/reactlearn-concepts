import React from "react";
import Form from "./Form";

function Layout({ isLoading, onClickSubmit }) {
  return (
    <>
      <Form isLoading={isLoading} onClickSubmit={onClickSubmit} />
    </>
  );
}

export default Layout;