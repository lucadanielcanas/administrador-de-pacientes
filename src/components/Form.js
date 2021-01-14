import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Form = ({createAppt}) => {

    //Crear state de citas
    const [appointment, updateAppointment] = useState({
        firstname:'',
        lastname: '',
        age: '',
        hour: '',
        motive: ''
    });
    const [error, updateError] = useState(false);

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value 
        });
    }

    //Extraer valores
    const { firstname, lastname, age, hour, motive } = appointment;

    //Cuando se envia el formulario
    const submitAppointment = e => {
        e.preventDefault();

        //Validar
        if(firstname.trim() === '' || lastname.trim() === '' || age.trim() === '' || hour.trim() === '' || motive.trim() === '') {
            updateError(true);
            return;
        }
        
        //Eliminar el mensaje previo
        updateError(false);

        //Asignar id
        appointment.id = uuid();

        //Crear la cita
        createAppt(appointment);
        
        //Reiniciar form
        updateAppointment({
            firstname:'',
            lastname: '',
            age: '',
            hour: '',
            motive: ''
        });
    }

    return(
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre Paciente</label>
                <input 
                    type="text"
                    name="firstname"
                    className="u-full-width"
                    placeholder="Nombre Paciente"
                    onChange={handleChange}
                    value={firstname}
                />
                <label>Apellido Paciente</label>
                <input 
                    type="text"
                    name="lastname"
                    className="u-full-width"
                    placeholder="Apellido Paciente"
                    onChange={handleChange}
                    value={lastname}
                />
                <label>Fecha de Nacimiento</label>
                <input 
                    type="date"
                    name="age"
                    className="u-full-width"
                    onChange={handleChange}
                    value={age}
                />

                <label>Hora de la cita</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />

                <label>Motivo</label>
                <textarea
                    className="u-full-width"
                    name="motive"
                    onChange={handleChange}
                    value={motive}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createAppt: PropTypes.func.isRequired
} 

export default Form;