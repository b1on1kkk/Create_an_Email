import { EditorState, Modifier } from "draft-js";

export const insertBeforeInputData = (
  char: string,
  editorState: EditorState,
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const newContentState = Modifier.replaceText(
    contentState,
    selectionState,
    char
  );
  setEditorState(
    EditorState.push(editorState, newContentState, "insert-characters")
  );
};
