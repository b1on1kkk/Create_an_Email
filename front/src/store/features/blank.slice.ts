import { createSlice } from "@reduxjs/toolkit";

interface initialBlankState {
  expanded: boolean;
  blank_title: {
    value: string;
    status: boolean;
  };
  array_of_emails: {
    value: string;
    status: boolean;
  }[];
  edit_text_modal: boolean;
  modal_position: { x: number; y: number };
  friends_modal: boolean;
  focus: boolean;
  settings_modal: boolean;
  emojis_modal: boolean;
  letter_text: string;
  files: {
    name: string[];
    extensions: string[];
    size: string[];
  };
  switcher: {
    on: string[];
  };
}

const initialState: initialBlankState = {
  expanded: false,
  blank_title: {
    value: "",
    status: true
  },
  array_of_emails: [],
  edit_text_modal: false,
  modal_position: { x: 0, y: 0 },
  friends_modal: false,
  focus: true,
  settings_modal: false,
  emojis_modal: false,
  letter_text: "",
  files: {
    name: [],
    extensions: [],
    size: []
  },
  switcher: {
    on: ["Paperclip", "User2"]
  }
};

const blankSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    expandBlank: (state, action) => {
      state.expanded = action.payload;
    },
    pushEmails: (state, action) => {
      state.array_of_emails.push(action.payload);
    },
    removeFromEmailList: (state, action) => {
      state.array_of_emails = state.array_of_emails.filter(
        (_, idx) => idx !== action.payload
      );
    },
    addTitle: (state, action) => {
      const { status, value } = action.payload;
      (state.blank_title.value = value), (state.blank_title.status = status);
    },
    setEditTextModal: (state, action) => {
      state.edit_text_modal = action.payload;
    },
    setModalPosition: (state, action) => {
      const { x, y } = action.payload;
      (state.modal_position.x = x), (state.modal_position.y = y);
    },
    setFriendModal: (state, action) => {
      state.friends_modal = action.payload;
    },
    setTextEditorFocus: (state, action) => {
      state.focus = action.payload;
    },
    setLetterText: (state, action) => {
      state.letter_text = action.payload;
    },
    setFilesNameAndExtensions: (state, action) => {
      const { name, extensions, size } = action.payload;
      state.files.extensions.push(extensions);
      state.files.name.push(name);
      state.files.size.push(size);
    },
    setSwitcher: (state, action) => {
      if (state.switcher.on.includes(action.payload)) {
        state.switcher.on = state.switcher.on.filter(
          (name) => name !== action.payload
        );

        return;
      }

      state.switcher.on.push(action.payload);
    },
    setSettingsModal: (state, action) => {
      state.settings_modal = action.payload;
    },
    setEmojiModal: (state, action) => {
      state.emojis_modal = action.payload;
    }
  }
});

export const {
  expandBlank,
  pushEmails,
  removeFromEmailList,
  addTitle,
  setEditTextModal,
  setModalPosition,
  setFriendModal,
  setTextEditorFocus,
  setLetterText,
  setFilesNameAndExtensions,
  setSwitcher,
  setSettingsModal,
  setEmojiModal
} = blankSlice.actions;

export default blankSlice;
