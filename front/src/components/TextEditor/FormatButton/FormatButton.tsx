import type { FC } from "react";
import styles from "./FormatButton.module.scss";

type TProps = {
  onToggle: (style: string) => void;
  style: string;
  icon: JSX.Element;
  isActive: boolean;
};

export const FormatButton: FC<TProps> = ({
  onToggle,
  style,
  icon,
  isActive
}) => {
  return (
    <div
      onMouseDown={(event) => {
        event.preventDefault();
        onToggle?.(style);
      }}
      className={isActive ? styles.isActive : styles.isNotActive}
    >
      {icon}
    </div>
  );
};
