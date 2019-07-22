import { useState, useEffect } from "react";

const isEmpty = obj => Object.keys(obj).length === 0;

const useForm = (initialValues, callback, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isEmpty(errors) && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    if (isEmpty(errors)) setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    }));
  };

  const finishSubmitting = () => {
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return {
    handleChange,
    handleSubmit,
    finishSubmitting,
    isSubmitting,
    values,
    errors,
    isSubmitted
  };
};

export default useForm;
