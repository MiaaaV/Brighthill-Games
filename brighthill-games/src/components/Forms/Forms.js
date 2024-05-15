import React, { useState } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";
import ValidateForm from './FormValidation';
import "./Forms.css";
import "../styles/Reusables.css";

function Forms({ formData, handleChange, handleFileChange }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleValidation = (isValid, errors) => {
    setIsValid(isValid);
    setErrors(errors);
  };

  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);
  };

  // name, phone, email layout here
  const renderInput = (id, type, placeholder, value, setter, error) => (
    <div className='flex-col'>
      <label htmlFor={id} className='font-2'>
        {placeholder} <span id='star'>*</span>
      </label>
      <div className='input-with-icon flex'>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e, setter)}
          className={value && error ? 'invalid' : ''}
          required
        />
        {value && (
          !error ? (
            <FaCheck className="valid-icon" />
          ) : (
            <FaTimes className="invalid-icon" />
          )
        )}
      </div>
      <div className={`error-placeholder ${error ? 'visible' : ''}`}>
        <p className={`error ${error ? 'visible' : ''}`}>{error}</p>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {!submitted ? (
        <form id='career-form' onSubmit={handleSubmit} className='flex-col col-12'>

          {renderInput('name', 'text', 'Name', name, setName, errors.name)}
          {renderInput('phone', 'tel', 'Phone', phone, setPhone, errors.phone)}
          {renderInput('email', 'email', 'Email', email, setEmail, errors.email)}

          <label className='font-2 flex-col col-8'>
            <p>CV (.pdf, .doc, .docx)</p>
            <div className='flex'>
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
          </label>

          <label className='font-2 flex-col col-8'>
            <p> Application letter (.pdf, .doc, .docx)</p>
            <div className='flex'>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
          </label>

          <label className='font-2 flex-col'>
            <p>Link to portfolio or other site</p>
            <div className="input-with-icon flex">
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Link"
              />
              {formData.portfolio && (
                <FaCheck className="valid-icon" />
              )}
            </div>
          </label>

          <label className='font-2 flex-col'>
            <p>Where did you hear about this position?</p>
            <div className='flex'>
              <input
                type="text"
                name="where"
                value={formData.where}
                onChange={handleChange}
                placeholder="Free word"
              />
            </div>
          </label>

          <ValidateForm
            name={name}
            phone={phone}
            email={email}
            onValidation={handleValidation}
          />

        </form>

      ) : (

        <div id='thank-you' className="flex-col flex-center flex-align">
          <h1>Thank you for applying!</h1>
          <p className='font-2'>We will be in contact with you as soon as possible.</p>
        </div>
      )}
    </>
  );
}

export default Forms;