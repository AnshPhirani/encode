import React, { useEffect } from "react";
import MonacoEditor from "@uiw/react-monacoeditor";
import "./Editor.css";
import EditorHeader from "../editor-header/EditorHeader";
import { useSelector } from "react-redux";
import {
  javaCode,
  pythonCode,
  cppCode,
  javascriptCode,
  cSharpCode,
} from "../../assests/boilerPlateCode";

const Editor = ({ editorRef, inputRef, outputRef }) => {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);

  useEffect(() => {
    switch (language) {
      case "Java":
        editorRef?.current?.editor?.getModel()?.setValue(javaCode);
        break;
      case "Python":
        editorRef?.current?.editor?.getModel()?.setValue(pythonCode);
        break;
      case "C++":
        editorRef?.current?.editor?.getModel()?.setValue(cppCode);
        break;
      case "Javascript":
        editorRef?.current?.editor?.getModel()?.setValue(javascriptCode);
        break;
      case "C#":
        editorRef?.current?.editor?.getModel()?.setValue(cSharpCode);
        break;
      default:
        editorRef?.current?.editor?.getModel()?.setValue(javaCode);
    }
  }, [language, editorRef]);

  return (
    <div className="editor">
      <EditorHeader
        inputRef={inputRef}
        outputRef={outputRef}
        editorRef={editorRef}
      />

      <MonacoEditor
        ref={editorRef}
        style={{ flexGrow: 1 }}
        height="80%"
        width="100%"
        language={language.toLowerCase()}
        value={`class Progman{
    public static void main(String[] args) {
         System.out.println("Encoder"); 
    }
  }`}
        options={{
          theme: theme,
          fontSize: fontSize,
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: "line",
          automaticLayout: true,
          scrollbar: {
            // Subtle shadows to the left & top. Defaults to true.
            useShadows: true,
            // Render vertical arrows. Defaults to false.
            verticalHasArrows: false,
            // Render horizontal arrows. Defaults to false.
            horizontalHasArrows: false,
            // Render vertical scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            vertical: "visible",
            // Render horizontal scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            horizontal: "visible",
            verticalScrollbarSize: 15,
            horizontalScrollbarSize: 15,
            arrowSize: 30,
          },
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};

export default Editor;
