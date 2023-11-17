import styles from "./EditModal.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface EditModal {
  settingChosenUserUp: (name: string) => void;
}

export default function FriendsModal({ settingChosenUserUp }: EditModal) {
  const friends = useSelector((state: RootState) => state.friends.friends);
  const blank = useSelector((state: RootState) => state.blank);

  return (
    <>
      {blank.friends_modal && (
        <>
          <div
            className={styles.friends_modal}
            style={{
              top: blank.modal_position.y,
              left: blank.modal_position.x
            }}
          >
            {friends.map((e, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-1 p-1 rounded-lg hover:bg-neutral-200 transition-colors duration-300"
                  onClick={() =>
                    settingChosenUserUp(
                      `${friends[idx].name} ${friends[idx].surname}`
                    )
                  }
                >
                  <div className="w-small_friend_picture h-small_friend_picture">
                    <img
                      src={e.img}
                      alt="friend_img"
                      className="flex object-cover h-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-1 text-base font-medium">
                      <div>{e.name}</div>
                      <div>{e.surname}</div>
                    </div>
                    <div className="text-xs">{e.email}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
