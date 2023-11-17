import styles from "./Header.module.scss";

import { Minus } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { Minimize2 } from "lucide-react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { expandBlank } from "../../store/features/blank.slice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  return (
    <div className={styles.header_wrapper}>
      <span>
        <Minus width={18} height={18} className={styles.buttons}></Minus>
      </span>

      <span>
        {blank.expanded ? (
          <Minimize2
            width={18}
            height={18}
            className={styles.buttons}
            onClick={() => dispatch(expandBlank(false))}
          />
        ) : (
          <Maximize2
            width={18}
            height={18}
            className={styles.buttons}
            onClick={() => dispatch(expandBlank(true))}
          />
        )}
      </span>

      <span>
        <X width={18} height={18} className={styles.buttons}></X>
      </span>
    </div>
  );
}
