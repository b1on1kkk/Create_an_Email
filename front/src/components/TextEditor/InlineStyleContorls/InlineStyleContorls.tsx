import type { FC } from "react";
import { TEXT_EDITOR_INLINE_STYLES } from "../constants";

import { FormatButton } from "../FormatButton/FormatButton";

import { EditorState } from "draft-js";

type TProps = {
  onToggle: (value: string) => void;
  editorState: EditorState;
};

const InlineStyleControls: FC<TProps> = ({ onToggle, editorState }) => {
  const currentStyles = editorState.getCurrentInlineStyle();

  return (
    <>
      {TEXT_EDITOR_INLINE_STYLES.map((type, idx) => (
        <FormatButton
          key={idx}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
          isActive={currentStyles.has(type.style)}
        />
      ))}
    </>
  );
};

export default InlineStyleControls;
