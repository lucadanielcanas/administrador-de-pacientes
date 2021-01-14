import React from 'react'
import PropTypes from 'prop-types';

const Appointment = ({appt, deleteAppt}) => (
    <div className="cita">
        <p>Firstname: <span>{appt.firstname}</span></p>
        <p>Lastname: <span>{appt.lastname}</span></p>
        <p>Age: <span>{appt.age}</span></p>
        <p>Hour: <span>{appt.hour}</span></p>
        <p>Motive: <span>{appt.motive}</span></p>
        
        <button
            className="button eliminar u-full-width"
            onClick={() => deleteAppt(appt.id)}
        >
            Eliminar &times;</button>
    </div>
)

Appointment.propTypes = {
    appt: PropTypes.object.isRequired,
    deleteAppt: PropTypes.func.isRequired
}

export default Appointment;