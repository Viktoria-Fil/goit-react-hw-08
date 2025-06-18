import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { BiSolidUser } from "react-icons/bi";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <div>
        <div>
          <p> {dataUser.name}</p>
          <p> {dataUser.email}</p>
        </div>
        <BiSolidUser />
      </div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}
