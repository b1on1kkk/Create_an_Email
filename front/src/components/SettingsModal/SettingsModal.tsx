import styles from "./SettingsModal.module.scss";

// components
import Switch from "react-switch";
//

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setSwitcher } from "../../store/features/blank.slice";
//

import { MORE_SETTINGS_SVGS_ARRAY } from "../../constants";

export default function SettingsModal() {
  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  return (
    <div className={styles.friends_modal} style={{ top: "-145px" }}>
      {MORE_SETTINGS_SVGS_ARRAY.map((elem, idx) => {
        return (
          <div
            className="flex p-1 gap-2 items-center"
            key={idx}
            style={
              blank.switcher.on.includes(elem.tag.props.id)
                ? {}
                : { opacity: "0.5" }
            }
          >
            {elem.tag}
            <span className="flex-1">{elem.title}</span>
            <div className="flex items-center">
              <Switch
                checked={blank.switcher.on.includes(elem.tag.props.id)}
                onChange={() => dispatch(setSwitcher(elem.tag.props.id))}
                checkedIcon={false}
                uncheckedIcon={false}
                width={25}
                height={15}
                onColor="#000000"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
