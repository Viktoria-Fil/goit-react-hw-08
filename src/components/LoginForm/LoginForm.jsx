import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form action="#" className={css.form}>
          <label htmlFor="email">email</label>
          <Field type="email" id="login" name="email" className={css.input} />

          <label htmlFor="password">password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className={css.field}
          />

          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
}
