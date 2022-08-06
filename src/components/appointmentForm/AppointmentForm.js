import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const titleChange = ({target}) => {
    setTitle(target.value);
  }

  const dateChange = ({target}) => {
    setDate(target.value);
  }

  const timeChange = ({target}) => {
    setTime(target.value);
  }

  const contactChange = ({target}) => {
    setContact(target.value);
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>Appointment Title:</label>
      <input id='title' type='text' value={title} onChange={titleChange}></input>
      <label for='names'>Name:</label>
      <ContactPicker id='names' contactsList={contacts} contactChange={contactChange} />
      <label for='date'>Date:</label>
      <input  id='date' type='date' min={getTodayString()} onChange={dateChange} value={date}></input>
      <label for='time'>Time:</label>
      <input id='time' type='time' value={time} onChange={timeChange}></input>
      <input type='submit' value='Submit'></input>
    </form>
  );
};
