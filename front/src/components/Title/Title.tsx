import styles from "./Title.module.scss";

// redux
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useReducer } from "react";
import { addTitle } from "../../store/features/blank.slice";
//

// icons
import { Pencil } from "lucide-react";
//

// utils
import { TextSetterReducer } from "./utils/TextSetterReducer";
//

// interfaces
import { TextSetterEnum } from "./interfaces/interfaces";
//

export default function Title() {
  const MAX_TITLE_LENGTH = 50;
  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  const [state, reducerDispatch] = useReducer(TextSetterReducer, {
    value: blank.blank_title.value,
    actual_length: MAX_TITLE_LENGTH
  });

  return (
    <div className="flex mt-5 pb-2 mb-5 border-b-1 items-center">
      <div className="p-1 flex w-full flex-1">
        {blank.blank_title.status ? (
          <input
            type="text"
            maxLength={MAX_TITLE_LENGTH}
            className={styles.input}
            value={state.value}
            onChange={(e) =>
              reducerDispatch({
                type: TextSetterEnum.TextSetting,
                payload: {
                  value: e.target.value,
                  MAX_TITLE_LENGTH: MAX_TITLE_LENGTH
                }
              })
            }
            onBlur={() =>
              state.value &&
              dispatch(addTitle({ value: state.value, status: false }))
            }
            placeholder="Enter title"
          />
        ) : (
          <div className="font-semibold">{state.value}</div>
        )}
      </div>
      {blank.blank_title.status ? (
        <div className="flex text-xs px-2 py-0.5 bg-coolGray-200 rounded-lg text-slate-500 duration-300">
          {state.actual_length}
        </div>
      ) : (
        <div
          className="flex p-1 rounded-lg hover:bg-coolGray-200 duration-300"
          onClick={() => {
            dispatch(addTitle({ value: state.value, status: true }));
          }}
        >
          <Pencil width={16} height={16} className="opacity-50" />
        </div>
      )}
    </div>
  );
}
