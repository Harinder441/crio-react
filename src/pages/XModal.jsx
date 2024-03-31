import React, { useState } from 'react';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Invalid email. Please check your email address.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Invalid phone number. Please enter a 10-digit phone number.';
    }
    if (!dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    } else {
      const inputDate = new Date(dob);
      const currentDate = new Date();
      if (inputDate > currentDate) {
        newErrors.dob = 'Invalid date. Please enter a past date.';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
      closeModal();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
        <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form>
                <InputField label="Username:" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" required error={errors.username} />
                <InputField label="Email:" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required error={errors.email} />
                <InputField label="Phone:" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" required error={errors.phone} />
                <InputField label="Date of Birth:" type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} id="dob" required error={errors.dob} />
                
                <button className="submit-button" onClick={handleSubmit}>Submit</button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};



export default XModal;



function InputField({ label, type, placeholder, value, onChange, id, required,error }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        required={required}
      />
      {error && <p>{error}</p>}
    </div>
  );
}