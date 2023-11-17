import { Editor, EditorState, RichUtils } from "draft-js";
import type { FC } from "react";

import { TEXT_EDITOR_CUSTOM_STYLES } from "./constants";

import "draft-js/dist/Draft.css";

import { getFriends } from "../../store/features/friends.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

import {
  setEditTextModal,
  setFriendModal
} from "../../store/features/blank.slice";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { useOutsideClick } from "../../hooks/useOutsideClick ";

import { setTextEditorFocus } from "../../store/features/blank.slice";

import { insertBeforeInputData } from "./utils/insertBeforeInputData";

type TProps = {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  friendsModal: boolean;
};

const TextEditorComponent: FC<TProps> = ({
  editorState,
  setEditorState,
  friendsModal
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  const ref = useOutsideClick(() => dispatch(setTextEditorFocus(false)));

  const handleChangeText = (value: EditorState) => {
    const currentSelection = value.getSelection();
    const stateWithContentAndSelection = EditorState.forceSelection(
      value,
      currentSelection
    );

    setEditorState(stateWithContentAndSelection);
  };

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleBeforeInput = (chars: string, editorState: EditorState) => {
    if (chars === "@" || (chars === " " && friendsModal)) {
      dispatch(getFriends());

      insertBeforeInputData(chars, editorState, setEditorState);

      dispatch(setFriendModal(!friendsModal));

      return "handled";
    }

    return "not-handled";
  };

  return (
    <>
      <div
        className="w-full"
        ref={ref}
        onSelect={() => {
          const selection = window.getSelection()?.toString();

          if (selection) dispatch(setEditTextModal(true));
          else dispatch(setEditTextModal(false));
        }}
        onClick={() => dispatch(setTextEditorFocus(true))}
      >
        <Editor
          customStyleMap={TEXT_EDITOR_CUSTOM_STYLES}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChangeText}
          placeholder={"Enter text..."}
          handleBeforeInput={handleBeforeInput}
          readOnly={blank.focus ? false : true}
          spellCheck={true}
        />
      </div>
    </>
  );
};

export default TextEditorComponent;
