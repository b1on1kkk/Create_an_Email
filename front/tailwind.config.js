/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    colors: {
      ...colors,
      main_bg: "#BBBBBB",
      letter_bg: "#FAFAFAFA"
    },
    width: {
      small_letter_width: "700px",
      big_letter_width: "1400px",
      full: "100%",
      footer_send_button: "145px",
      after_line: "5px",
      small_friend_picture: "40px",
      modal_friends: "250px",
      picture_width: "30px",
      settings_block: "200px"
    },
    height: {
      small_letter_height: "600px",
      big_letter_height: "900px",
      full: "100%",
      footer: "80px",
      text_box: "300px",
      text_box_expanded: "585px",
      after_line: "50px",
      small_friend_picture: "40px"
    },
    transitionDuration: {
      300: "300ms"
    },
    borderWidth: {
      1: "1px",
      2: "2px"
    },
    translate: {
      modal_change_style: "-4rem",
      modal_change_style_close: "-3rem"
    },
    inset: {
      font_modal: "-7.5rem",
      zero_left: "0px"
    },
    minHeight: {
      small_letter_height: "600px",
      big_letter_height: "900px"
    },
    minWidth: {
      small_letter_width: "700px",
      big_letter_width: "1400px"
    }
  },

  plugins: [require("tailwind-scrollbar")],

  variants: {
    scrollbar: ["rounded"]
  }
};
