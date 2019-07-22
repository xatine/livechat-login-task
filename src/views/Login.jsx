import React, { useContext } from "react";
import { Redirect } from "react-router";
import useForm from "hooks/useForm.js";
import { AuthContext } from "context";

import {
  Checkbox,
  Field,
  Fieldset,
  Header,
  Input,
  Notification,
  Button
} from "components";
const { isFormValid } = require("utils/validate.js");

const initialValues = {
  email: "",
  password: "",
  keepLoggedIn: false
};
const Login = () => {
  const {
    handleChange,
    handleSubmit,
    finishSubmitting,
    isSubmitting,
    values,
    errors,
    isSubmitted
  } = useForm(initialValues, submitForm, isFormValid);

  async function submitForm() {
    const token = await login(values);
    if (!token) finishSubmitting();
  }

  const { loading, token, login } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (token) return <Redirect to="/userPanel" />;
  return (
    <div>
      <Header text="Sign in to the dashboard" />
      <form onSubmit={handleSubmit} noValidate>
        <Fieldset>
          {isSubmitted && !token && (
            <Notification>Invalid email or password</Notification>
          )}
          <Field height="90px">
            <Input
              type="email"
              placeholder="name@company.com"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              autoCorrect="off"
              autoCapitalize="off"
              label="Email"
            />
          </Field>
          <Field height="90px">
            <Input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              autoCorrect="off"
              autoCapitalize="off"
              label="Password"
            />
          </Field>
          <Field height="30px">
            <label>
              <Checkbox
                name="keepLoggedIn"
                onChange={handleChange}
                checked={values.keepLoggedIn}
                label="Remember Me"
              />
              <span style={{ marginLeft: "8px", fontSize: "12px" }}>
                Remember Me
              </span>
            </label>
          </Field>
          <Button type="submit" disabled={isSubmitting} text="Sign in" />
        </Fieldset>
      </form>
    </div>
  );
};

export default Login;
