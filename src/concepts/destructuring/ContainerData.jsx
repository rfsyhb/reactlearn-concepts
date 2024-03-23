import React from "react";
import DataContent from "./DataContent";
import DataAction from "./DataAction";

function ContainerData(person) {
  return (
    <div className="container-data">
      <DataContent {...person}/>
      <DataAction />
    </div>
  );
}

export default ContainerData;