import React from "react";
import "./EditorHeader.css";

import runCode, { CodeStatus, languageCode } from "../../util/runCode";
import SettingModal from "../setting-modal/SettingModal";
import DropDown from "../dropdown-btn/DropDown";
import { useSelector, useDispatch } from "react-redux";

const EditorHeader = ({ editorRef, inputRef, outputRef }) => {
  const language = useSelector((state) => state.language);
  const codeStatus = useSelector((state) => state.codeStatus);

  const dispatch = useDispatch();

  function handleRunCode() {
    // setCodeStatus(CodeStatus.Running);
    dispatch({ type: "CHANGE_CODE_STATUS", payload: CodeStatus.Running });
    outputRef.current.value = "";

    console.log(editorRef.current);

    const code = editorRef.current.editor.getModel().getValue();

    // console.log(editorRef.current.editor.getModel());
    const input = inputRef.current.value;
    const languageChoice = languageCode[language];

    runCode(code, input, languageChoice)
      .then(function (response) {
        console.log(response);
        if (!response.data.Errors) {
          if (response.data.Result === null) response.data.Result = "";
          outputRef.current.value = response.data.Result;
          dispatch({
            type: "CHANGE_CODE_STATUS",
            payload: CodeStatus.Finished,
          });
        } else {
          outputRef.current.value = response.data.Errors;
          dispatch({ type: "CHANGE_CODE_STATUS", payload: CodeStatus.Error });
        }
      })
      .catch(function (error) {
        console.error(error);
        outputRef.current.value = "Something went wrong";
        dispatch({ type: "CHANGE_CODE_STATUS", payload: CodeStatus.Error });
      });
  }

  return (
    <div className="editor__header">
      <div className="editor__header--left">
        <button
          onClick={handleRunCode}
          className={
            `btn btn-success round run-code-btn` +
            (codeStatus === CodeStatus.Running ? " disabled" : "")
          }
        >
          <i className="fa fa-play-circle" aria-hidden="true"></i>&nbsp; Run
          <span className="hidden-xs hidden-sm"> Code</span>
        </button>
      </div>
      <div className="editor__header--right">
        <DropDown
          dropDownName="language"
          dropDownAction="CHANGE_LANGUAGE"
          dropDownOptions={["Java", "C#", "C++", "Javascript", "Python"]}
        />

        <div className="editor__header--right--options">
          <button
            className="editor__header--setting"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa fa-cog " aria-hidden="true"></i>
          </button>
          <SettingModal />
          <button
            className="editor__header--reset"
            onClick={() => editorRef.current.editor.getModel().setValue("")}
          >
            <i className="fa fa-refresh " aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
