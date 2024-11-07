import React, { useState } from "react";
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
    const [availability, setAvailability] = useState([]);

    const addAvailability = (date, time) => {
        setAvailability([...availability, { date, time }]);
    };

    const deleteAvailability = (index) => {
        setAvailability(availability.filter((_, i) => i !== index));
    };

    return (
        <div className="container-admin-out">
        <div className="container-admin">
            <h2>Admin Dashboard</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                addAvailability(e.target.date.value, e.target.time.value);
            }}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="date">Available Date</label>
                    </div>
                    <div className="col-75">
                        <input type="date" id="date" name="date" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="time">Available Time</label>
                    </div>
                    <div className="col-75">
                        <input type="time" id="time" name="time" />
                    </div>
                </div>
                <div className="button-admin">
                    <button type="submit">Add Availability</button>
                </div>
            </form>
            <h3>Available Slots</h3>
            <ul className="admin-ui">
                {availability.map((slot, index) => (
                    <li className='admin-ui' key={index}>
                        {slot.date} at {slot.time}
                        <button className="delete-button" onClick={() => deleteAvailability(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default AdminDashboard;
