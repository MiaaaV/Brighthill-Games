import React from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";
import "./styles/Forms.css";
import "./styles/Reusables.css";

function Forms({ formData, handleChange, handleFileChange, handleSubmit, submitted }) {
  return (
    <>
      {!submitted ? (
        <form id='career-form' onSubmit={handleSubmit} className='flex-col col-12'>

          <label className='font-2 flex-col'>
            <p>Name <span id="star">*</span></p>
            <div className="input-with-icon flex">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                className={formData.fullName && !formData.fullName.match(/^[a-zA-ZåöäÅÖÄ\s-]*$/) ? "invalid" : ""}
                required
              />
              {formData.fullName && (
                formData.fullName.match(/^[a-zA-ZåöäÅÖÄ\s-]*$/) ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
          </label>

          <label className='font-2 flex-col'>
            <p>Phone <span id="star">*</span></p>
            <div className="input-with-icon flex">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={formData.phone && !formData.phone.match(/^[\d+ ]*$/) ? "invalid" : ""}
                required
              />
              {formData.phone && (
                formData.phone.match(/^[\d+ ]*$/) ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
          </label>

          <label className='font-2 flex-col'>
            <p>Email <span id="star">*</span></p>
            <div className="input-with-icon flex">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "invalid" : ""}
                required
              />
              {formData.email && (
                formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? (
                  <FaCheck className="valid-icon" />
                ) : (
                  <FaTimes className="invalid-icon" />
                )
              )}
            </div>
          </label>

          <label className='font-2 flex-col col-6'>
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

          <label className='font-2 flex-col col-6'>
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

          <button id='btn-sm' className='col-4' type="submit">Apply</button>
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