import React, { useState } from "react";
import AppointmentList from "./AppointmentList"; // Import AppointmentList component
import './AppointmentForm.css';

const AppointmentForm = ({ addAppointment, appointments, deleteAppointment, clearAppointments, editAppointment }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);

    if (selectedDate <= today) {
      setErrorMessage("Appointment date must be in the future.");
      return;
    }

    setErrorMessage("");

    const appointmentData = { name, date };

    // Add the appointment locally using the `addAppointment` prop
    addAppointment(appointmentData);

    setName("");
    setDate("");
  };

  return (
    <div className="form-background">
    <div className="container15">
      <h1>Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Full Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="date">Appointment Date: </label>
          </div>
          <div className="col-75">
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="row">
          <input type="submit" value="Add Appointment" />
        </div>
      </form>
      {/* AppointmentList component should appear at the bottom of the page */}
      <AppointmentList 
        appointments={appointments} 
        deleteAppointment={deleteAppointment} 
        clearAppointments={clearAppointments} 
        editAppointment={editAppointment}
      />
    </div>
    </div>
  );
};
export default AppointmentForm;
