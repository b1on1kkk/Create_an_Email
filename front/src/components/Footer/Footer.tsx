import { useRef } from "react";
import styles from "./Footer.module.scss";
import { convertFileSizeToMB } from "./utils/bytesToMbConverter";

import {
  Trash2,
  MoreVertical,
  Eraser,
  SmilePlus,
  Paperclip,
  CalendarDays
} from "lucide-react";

import { setFilesNameAndExtensions } from "../../store/features/blank.slice";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import SettingsModal from "../SettingsModal/SettingsModal";
import { setSettingsModal } from "../../store/features/blank.slice";

import EmojisModal from "../EmojisModal/EmojisModal";

import { setEmojiModal } from "../../store/features/blank.slice";

import { EditorState } from "draft-js";

interface TFooter {
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editorState: EditorState;
}

export default function Footer({ setEditorState, editorState }: TFooter) {
  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  const refHiddenFileAdding = useRef<HTMLInputElement | null>(null);

  const addFilesHandler = () => {
    refHiddenFileAdding.current?.click();
  };

  const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    for (const file of e.target.files!) {
      const splittedFileData = file.name.split(".");
      const fileFize = convertFileSizeToMB(file.size).toFixed(2);
      dispatch(
        setFilesNameAndExtensions({
          name: splittedFileData[0],
          extensions: splittedFileData[1],
          size: `${fileFize}mb`
        })
      );
    }
  };

  return (
    <div className={styles.footer_wrapper}>
      <div className="flex gap-4 flex-1 relative">
        <div className={styles.buttons}>
          <Trash2 width={20} height={20} className="opacity-50" />
        </div>
        <div
          className={styles.buttons}
          onClick={() => dispatch(setSettingsModal(!blank.settings_modal))}
        >
          <MoreVertical width={20} height={20} className="opacity-50" />
        </div>
        {blank.settings_modal && <SettingsModal />}
      </div>
      <div className="flex gap-4 relative">
        {blank.switcher.on.includes("Eraser") && (
          <div className={styles.buttons}>
            <Eraser width={20} height={20} className="opacity-50" />
          </div>
        )}

        {blank.switcher.on.includes("SmilePlus") && (
          <div
            className={styles.buttons}
            onClick={() => dispatch(setEmojiModal(!blank.emojis_modal))}
          >
            <SmilePlus width={20} height={20} className="opacity-50" />
          </div>
        )}

        {blank.switcher.on.includes("Paperclip") && (
          <div className={styles.buttons}>
            <input
              type="file"
              style={{ display: "none" }}
              ref={refHiddenFileAdding}
              onChange={filesHandler}
              multiple
            />
            <Paperclip
              width={20}
              height={20}
              onClick={addFilesHandler}
              className="opacity-50"
            />
          </div>
        )}

        {blank.emojis_modal && blank.switcher.on.includes("SmilePlus") && (
          <EmojisModal
            setEditorState={setEditorState}
            editorState={editorState}
          />
        )}
      </div>
      <div>
        <div className={styles.send_button}>
          <div className="text-white">Send now</div>
          <div className="justify-center">
            <CalendarDays
              width={20}
              height={20}
              color="white"
              className="opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
