import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    {
      name: 'Alex Board',
      phone: '0400100100',
      email: 'alex@email.com'
    }
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: 'Meeting',
      contact: 'Alex Board',
      date: '10/08/2022',
      time: '12:00'
    }
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newName, newPhone, newEmail) => {
    setContacts((prev) => {
      const contacts = {
        name: newName,
        phone: newPhone,
        email: newEmail,
      };
      return [...prev, contacts];
    })
  }

  const addAppointment = (newTitle, newContact, newDate, newTime) => {
    setAppointments((prev) => {
      const appointment = {
        title: newTitle,
        contact: newContact,
        date: newDate,
        time: newTime
      };
      return [...prev, appointment];
    })
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            contactsList={contacts} 
            onAddContacts={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            contactsList={contacts}
            appointmentsList={appointments}
            onAddAppointments={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
