import React from "react";
import "./IO.css";

const IO = ({ ioRef, editable, backgroundColor }) => {
  return (
    <textarea
      ref={ioRef}
      style={{ backgroundColor: backgroundColor }}
      className="io-area"
      disabled={!editable}
    />
  );
};

export default IO;
