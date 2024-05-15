import { useEffect } from "react";

function ValidateForm({ name, phone, email, onValidation }) {

  function Validate() {
    const nameRegex = /^[a-zA-ZåöäÅÖÄ\s-]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s]{7,}$/;

    const errors = {
      name: "",
      phone: "",
      email: ""
    };

    let isValid = true;

    if (name.length === 0) {
      errors.name = "Name cannot be empty";
      isValid = false;
    } else if (name.length < 2) {
      errors.name = "Name cannot be shorter than 2 characters";
      isValid = false;
    } else if (!nameRegex.test(name)) {
      errors.name = "Names cannot include special characters or numbers";
      isValid = false;
    }

    if (!phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    return { isValid, errors };
  }

  useEffect(() => {
    const { isValid, errors } = Validate();
    onValidation(isValid, errors);
  }, [name, phone, email]);

  const handleApplyClick = () => {
    const { isValid, errors } = Validate();
    onValidation(isValid, errors);
  };

  return (
    <>
      <button id='btn-sm' className='col-4' type="submit" onClick={handleApplyClick}>Apply</button>
    </>
  );
}

export default ValidateForm;