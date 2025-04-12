import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './ContactForm.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    if (!phone || phone.length < 10) return;
    setSubmitted(true);
    reset();
    setPhone('');
  };

  return (
    <div className="contact-section">
      <h2 className="title">Contact us</h2>
      <p className="subtitle">Speak with our team to see how we can help your business.</p>

      {submitted ? (
        <p className="success-message">Thank you! We'll get back to you shortly.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}

          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <PhoneInput
            placeholder="Your best contact number"
            value={phone}
            onChange={setPhone}
            defaultCountry="NP"
          />
          {!phone && <span className="error">Phone number is required</span>}

          <textarea
            placeholder="Business or company name"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className="error">{errors.message.message}</span>}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
