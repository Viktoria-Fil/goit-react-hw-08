import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ user: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.Contact} id={id}>
      <ul>
        <li className={css.Name}>
          <IoIosPerson />
          <p className={css.title}>{name}</p>
        </li>
        <li className={css.Name}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>

      <button className={css.Delete} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
