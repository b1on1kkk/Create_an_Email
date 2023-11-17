import styles from "./EmojisModal.module.scss";

import { EditorState, Modifier } from "draft-js";

import { emojiGenerator } from "./utils/emojiGenerator";

interface TEmoji {
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editorState: EditorState;
}

export default function EmojisModal({ setEditorState, editorState }: TEmoji) {
  const settingChosenEmoji = (emoji: number) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      selectionState,
      String.fromCodePoint(emoji)
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "insert-characters"
    );
    setEditorState(newEditorState);
  };

  return (
    <div
      className={styles.emoji_modal}
      style={{ top: "-315px", left: "-15px" }}
    >
      {emojiGenerator().map((emoji, idx) => {
        return (
          <div
            className={styles.emoji_styles}
            onClick={() => settingChosenEmoji(emoji)}
            key={idx}
          >
            {String.fromCodePoint(emoji)}
          </div>
        );
      })}
    </div>
  );
}
