import React, { useEffect, useState, useCallback } from "react";

function ValidateForm({ name, phone, email, onValidation }) {

  const [prevValidation, setPrevValidation] = useState({
    isValid: false,
    errors: { name: "", phone: "", email: "" }
  });

  const Validate = useCallback(() => {
    const nameRegex = /^[a-zA-ZåöäÅÖÄ\s-]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s]{7,}$/;

    const errors = { name: '', phone: '', email: '' };

    let isValid = true;

    if (name.length > 0) {
      if (name.length < 2) {
        errors.name = 'Name cannot be shorter than 2 characters';
        isValid = false;
      } else if (!nameRegex.test(name)) {
        errors.name = 'Names cannot include special characters or numbers';
        isValid = false;
      }
    }

    if (phone.length > 0 && !phoneRegex.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (email.length > 0 && !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    return { isValid, errors };
  }, [name, phone, email]);

  // compare to prev validation in order to prevent infinite looping
  useEffect(() => {
    const { isValid, errors } = Validate();
    if (isValid !== prevValidation.isValid || JSON.stringify(errors) !== JSON.stringify(prevValidation.errors)) {
      onValidation(isValid, errors);
      setPrevValidation({ isValid, errors });
    }
  }, [name, phone, email, onValidation, Validate, prevValidation]);

  const handleApplyClick = () => {
    const { isValid, errors } = Validate();
    onValidation(isValid, errors);
  };

  return (
    <>
      <button className="btn-sm col-4" type="submit" onClick={handleApplyClick}>
        Apply
      </button>
    </>
  );
}

export default ValidateForm;
