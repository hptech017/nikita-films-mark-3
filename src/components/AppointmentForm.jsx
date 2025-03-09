import React, { useState } from "react";
import "../styles/AppointmentForm.css"; // Import external CSS

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", formData);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form">
        <h2>Get An Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="date-time">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select A Service</option>
            <option value="Civil Law">Civil Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Business Law">Business Law</option>
            <option value="Criminal Law">Criminal Law</option>
          </select>
          <button type="submit">Get An Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
