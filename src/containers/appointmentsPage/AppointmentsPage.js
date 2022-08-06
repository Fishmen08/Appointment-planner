import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const contactsList = props.contactsList;
  const appointmentsList = props.appointmentsList;
  const onAddAppointments = props.onAddAppointments;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointments(title, contact, date, time)
    setTitle('');
    setContact('');
    setDate('');
    setTime('');   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        handleSubmit={handleSubmit} contacts={contactsList} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointmentsList={appointmentsList} />
      </section>
    </div>
  );
};
