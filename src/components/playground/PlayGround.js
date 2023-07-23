import React, { useRef } from "react";
import Editor from "../editor/Editor";
import "./PlayGround.css";
import IO from "../io/IO";
import { CodeStatus } from "../../util/runCode";
import { useSelector } from "react-redux";

const PlayGround = () => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const editorRef = useRef(null);

  const codeStatus = useSelector((state) => state.codeStatus);

  const codeStatusStyle = {
    backgroundColor:
      codeStatus === CodeStatus.Running
        ? "orange"
        : codeStatus === CodeStatus.Finished
        ? "green"
        : "red",
  };

  return (
    <div className="playground">
      <Editor editorRef={editorRef} inputRef={inputRef} outputRef={outputRef} />
      <div className="console">
        <div className="console-header">
          <div className="console-left ">
            <span className="text-500 text-md split-too-small">
              Output: &nbsp;
            </span>
            <span
              className="text-default label label-default label-Finished round code-status"
              style={codeStatusStyle}
            >
              {codeStatus === CodeStatus.Running
                ? "Running"
                : codeStatus === CodeStatus.Finished
                ? "Finished"
                : "Error"}
            </span>
          </div>
          <div className="console-right Oi">
            <button
              onClick={() => (outputRef.current.value = "")}
              className="btn btn-primary round clear-console-btn"
              style={{ backgroundColor: "#2637ed" }}
            >
              Clear Console
            </button>
          </div>
        </div>
        <div className="output">
          <IO
            ioRef={outputRef}
            backgroundColor="rgb(245, 243, 244)"
            editable={false}
          />
        </div>
        <div className="input">
          <IO ioRef={inputRef} backgroundColor="white" editable={true} />
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
