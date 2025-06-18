import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const idName = useId();
  const idNumber = useId();
  const idCard = nanoid();
  const initialValues = {
    id: idCard,
    name: "",
    number: "",
  };
  const newValidateWidthYupCard = Yup.object().shape({
    id: Yup.string(),
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be like this: 123-45-67")
      .required("Required"),
  });

  const dispatch = useDispatch();
  const handleSubmitFormik = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name.trim() || "",
        number: values.number.trim() || "11111",
      })
    );

    resetForm();
  };
  return (
    <>
      <h2>Add contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={newValidateWidthYupCard}
        onSubmit={handleSubmitFormik}
      >
        <Form>
          <ul className={css.Forma}>
            <li className={css.Input}>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </li>

            <li className={css.Input}>
              <label htmlFor="number">Number</label>
              <Field id="number" name="number" placeholder="123-45-67" />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "red" }}
              />
            </li>

            <button className={css.Submit} type="submit">
              Add contant
            </button>
          </ul>
        </Form>
      </Formik>
    </>
  );
}
