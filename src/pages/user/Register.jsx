import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { user, token } = await registerUser(values);
    login(user, token);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Formik initialValues={{ username: "", email: "", password: "" }} validationSchema={schema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <div>
            <label>Username</label>
            <Field name="username" className="input" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" className="input" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" className="input" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
