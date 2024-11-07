import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AppointmentForm from "./Components/AppointmentForm";
import AppointmentList from "./Components/AppointmentList";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import AdminDashboard from "./Components/AdminDashboard";
import NavigationBar from "./Components/NavigationBar";
import About from "./Components/About";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    toast.success("Appointment Added Successfully!");
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    toast.success("Appointment Deleted Successfully!");
  };

  const editAppointment = (index, name, date) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = { name, date };
    setAppointments(updatedAppointments);
    toast.success("Appointment Edited Successfully!");
  };

  const clearAppointments = () => {
    setAppointments([]);
    toast.success("All Appointments Cleared!");
  };

  return (
    <Router>
      <ToastContainer />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* Admin Route */}
        <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
        
        {/* Appointment Routes */}
        <Route path="/AppointmentForm" element={
          isAuthenticated && !isAdmin ? (
            <AppointmentForm 
              addAppointment={addAppointment} 
              appointments={appointments}
              deleteAppointment={deleteAppointment}
              clearAppointments={clearAppointments}
              editAppointment={editAppointment}
            />
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/AppointmentList" element={
          isAuthenticated ? (
            <AppointmentList 
              appointments={appointments}
              deleteAppointment={deleteAppointment}
              clearAppointments={clearAppointments}
              editAppointment={editAppointment} 
            />
          ) : (
            <Navigate to="/login" />
          )
        } />

        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
