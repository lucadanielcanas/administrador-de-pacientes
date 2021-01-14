import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  //Guardando en local storage
  let apptInit = JSON.parse(localStorage.getItem('appointments'));
  if(!apptInit)
    apptInit = [];

  //Arreglo de citas
  const [appointments, saveAppointments] = useState(apptInit);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let apptInit = JSON.parse(localStorage.getItem('appointments'));
    if(apptInit)
      localStorage.setItem('appointments', JSON.stringify(appointments));
    else
      localStorage.setItem('appointments', JSON.stringify([]));
  }, [appointments]);

  //Funcion que tome las citas actuales y agregue las nuevas
  const createAppointment = appointment => {
    saveAppointments([...appointments, appointment]);
  };

  //Funcion que elimina una cita por su id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    saveAppointments(newAppointments);
  };

  // Mensaje condicional
  const title = appointments.length === 0 ? 'No hay citas' : 'Tus citas';


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppt={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appt => (
              <Appointment 
                key={appt.id}
                appt={appt}
                deleteAppt={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
