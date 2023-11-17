import styles from "./App.module.scss";

import { useState } from "react";

import { FileIcon } from "react-file-icon";

// comps
import Header from "./components/Header/Header";
import From from "./components/From/From";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import TextEditor from "./components/TextEditor/TextEditor";
import FriendsModal from "./components/FriendsModal/FriendsModal";
import EditingTextModal from "./components/EditingTextModal/EditingTextModal";
//

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { setModalPosition, setFriendModal } from "./store/features/blank.slice";
//

// text editor
import { EditorState, Modifier } from "draft-js";
//

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const blank = useSelector((state: RootState) => state.blank);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (blank.friends_modal || blank.edit_text_modal) {
      dispatch(
        setModalPosition(
          blank.expanded
            ? { x: event.clientX, y: event.clientY + 30 }
            : {
                x: event.clientX - 720,
                y: event.clientY - 150
              }
        )
      );
    }
  };

  const settingChosenUserUp = (name: string) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      selectionState,
      name
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "insert-characters"
    );
    setEditorState(newEditorState);
    dispatch(setFriendModal(false));
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className={blank.expanded ? styles.expand_letter : styles.letter}>
        {/* text editor */}
        <EditingTextModal
          setEditorState={setEditorState}
          editorState={editorState}
        />
        {/*  */}

        {/* friends modal */}
        <FriendsModal settingChosenUserUp={settingChosenUserUp} />
        {/*  */}

        <div className="p-4 flex-1 flex flex-col relative">
          <main className="p-3 flex flex-col">
            <Header />
            <From />
            <Title />
            <div
              className={`${styles.text_area_wrapper} ${
                blank.expanded ? "h-text_box_expanded" : "h-text_box"
              }`}
              onMouseDown={handleMouseMove}
            >
              <TextEditor
                editorState={editorState}
                setEditorState={setEditorState}
                friendsModal={blank.friends_modal}
              />
            </div>
            <div className="flex gap-2 flex-col p-1">
              {blank.files.extensions.map((e, idx) => {
                return (
                  <div key={idx} className="flex gap-1">
                    <div className="w-picture_width items-center flex border-1 p-1 rounded-md">
                      <FileIcon extension={e} />
                    </div>
                    <div className="flex items-center text-sm">
                      {blank.files.name[idx]}.{e}
                    </div>
                    <div className="text-xs flex items-center opacity-50">
                      {blank.files.size[idx]}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
        <Footer setEditorState={setEditorState} editorState={editorState} />
      </div>
    </div>
  );
}

export default App;
