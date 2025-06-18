import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <>
      <RegistrationForm />
      <p>For start, do registration</p>
      <p>Name only in english </p>
      <p>Password only with numbers (at least 8).</p>
    </>
  );
}
