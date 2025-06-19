import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.user}>
      <div className={css.user}>
        <div>
          <p className={css.userData}> {dataUser.name}</p>
          <p className={css.userData}> {dataUser.email}</p>
        </div>
      </div>
      <button className={css.userBtn} onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}
