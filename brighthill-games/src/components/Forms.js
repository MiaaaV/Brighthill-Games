import React, { useState } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";
import ValidateForm from './FormValidation';
import "./styles/Forms.css";
import "./styles/Reusables.css";

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

          <div className='flex-col'>
            <label htmlFor='name' className='font-2'>
              Name <span id='star'>*</span>
            </label>
            <div className='input-with-icon flex'>
              <input
                id='name'
                type='text'
                placeholder='John Doe'
                value={name}
                onChange={e => setName(e.target.value)}
                className={name && errors.name ? 'invalid' : ''}
                required
              />
              {name && (
                !errors.name ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
            <div className='error-placeholder'>
              <p className={`error ${errors.name ? 'visible' : ''}`}>{errors.name}</p>
            </div>
          </div>

          <div className='flex-col'>
            <label htmlFor='phone' className='font-2'>
              Phone <span id='star'>*</span>
            </label>
            <div className='input-with-icon flex'>
              <input
                id='phone'
                type='tel'
                placeholder='+123 45 678 9101'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={phone && errors.phone ? 'invalid' : ''}
                required
              />
              {phone && (
                !errors.phone ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
            <div className='error-placeholder'>
              <p className={`error ${errors.phone ? 'visible' : ''}`}>{errors.phone}</p>
            </div>
          </div>

          <div className='flex-col'>
            <label htmlFor='email' className='font-2'>
              Email <span id='star'>*</span>
            </label>
            <div className='input-with-icon flex'>
              <input
                id='email'
                type='email'
                placeholder='John.Doe@gmail.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={email && errors.email ? 'invalid' : ''}
                required
              />
              {email && (
                !errors.email ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
            <div className='error-placeholder'>
              <p className={`error ${errors.email ? 'visible' : ''}`}>{errors.email}</p>
            </div>
          </div>

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