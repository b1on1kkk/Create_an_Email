import { Paperclip, Eraser, SmilePlus } from "lucide-react";

export const MORE_SETTINGS_SVGS_ARRAY = [
  {
    tag: (
      <Paperclip
        width={20}
        height={20}
        className="opacity-50"
        id={"Paperclip"}
      />
    ),
    title: "Files"
  },
  {
    tag: (
      <SmilePlus
        width={20}
        height={20}
        className="opacity-50"
        id={"SmilePlus"}
      />
    ),
    title: "Emojis"
  },
  {
    tag: <Eraser width={20} height={20} className="opacity-50" id={"Eraser"} />,
    title: "Clear"
  }
];
