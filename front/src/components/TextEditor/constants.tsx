import {
  Bold,
  Italic,
  Underline,
  Highlighter,
  Strikethrough
} from "lucide-react";

export const TEXT_EDITOR_CUSTOM_STYLES = {
  HIGHLIGHT: {
    backgroundColor: "#FFC797",
    color: "black"
  }
};

export const TEXT_EDITOR_INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <Bold width={20} height={20} /> },
  { label: "Italic", style: "ITALIC", icon: <Italic width={20} height={20} /> },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <Underline width={20} height={20} />
  },
  {
    label: "Strikethrough",
    style: "STRIKETHROUGH",
    icon: <Strikethrough width={20} height={20} />
  },
  {
    label: "Highlight",
    style: "HIGHLIGHT",
    icon: <Highlighter width={20} height={20} />
  }
];
