import styles from "./EditingTextModal.module.scss";

// comps
import InlineStyleControls from "../TextEditor/InlineStyleContorls/InlineStyleContorls";
//

// text editor
import { RichUtils, EditorState } from "draft-js";
//

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//

// icons
import { FileEdit } from "lucide-react";
//

interface TEditingTextModal {
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editorState: EditorState;
}

export default function EditingTextModal({
  setEditorState,
  editorState
}: TEditingTextModal) {
  const blank = useSelector((state: RootState) => state.blank);

  const styleSetter = (inlineStyle: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    setEditorState(newState);
  };

  return (
    <div
      className={blank.edit_text_modal ? styles.open_modal : styles.close_modal}
      style={{
        top: blank.modal_position.y,
        left: blank.modal_position.x
      }}
    >
      <div className="border-r-1 select-none">
        <div className={styles.drop_down}>
          Edit
          <FileEdit width={17} height={17} />
        </div>
      </div>

      <div className="flex pr-1 gap-1">
        <InlineStyleControls onToggle={styleSetter} editorState={editorState} />
      </div>
    </div>
  );
}
