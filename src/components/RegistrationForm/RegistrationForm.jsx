import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Welcome");
      })
      .catch(() => {
        toast.error(" Not valid !");
      });
    action.resetForm();
  };

  return (
    <>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form action="#" className={css.form}>
          <label htmlFor="name">name</label>
          <Field type="text" id="name" name="name" className={css.field} />

          <label htmlFor="email">email</label>
          <Field type="email" id="email" name="email" className={css.field} />

          <label htmlFor="password">password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className={css.field}
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
