import styles from "./From.module.scss";

import { useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { pushEmails } from "../../store/features/blank.slice";
import { removeFromEmailList } from "../../store/features/blank.slice";

import { X } from "lucide-react";

export default function From() {
  const [email, setEmail] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const blank = useSelector((state: RootState) => state.blank);

  const addingNewEmailToList = () => {
    if (email === "") return;

    if (email.includes("@") && email.includes(".")) {
      dispatch(pushEmails({ value: email, status: false }));
    } else {
      dispatch(pushEmails({ value: email, status: true }));
    }

    setEmail("");
  };

  return (
    <div className="flex flex-col pb-2 border-b-1">
      <div className="flex p-1 items-center">
        <span className="opacity-50 mr-2">From:</span>
        <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scroll-py-5">
          {blank.array_of_emails.map((e, idx) => {
            return (
              <div
                className={
                  e.status ? `${styles.wrong_email}` : `${styles.correct_email}`
                }
                key={idx}
              >
                <span className="underline underline-offset-2">{e.value}</span>
                <X
                  width={13}
                  height={13}
                  className="opacity-30 hover:opacity-100"
                  onClick={() => dispatch(removeFromEmailList(idx))}
                />
              </div>
            );
          })}
        </div>

        <input
          onBlur={addingNewEmailToList}
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
