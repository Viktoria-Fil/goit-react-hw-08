import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const idSearchInput = nanoid();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.Filter}>
      <h2>Filter</h2>
      <label htmlFor={idSearchInput}>Find contacts by name </label>
      <input
        className={css.Input}
        id={idSearchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}
