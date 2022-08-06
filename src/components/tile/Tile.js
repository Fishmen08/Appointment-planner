import React from "react";

export const Tile = (props) => {
  const appointments = props.appointments;
  const contacts = props.contacts;
  
  return (
    <div className="tile-container">
      {appointments ? <div>{appointments.map((item, index) => {
        return (
        <div key={index}>
          <p className='tile-title'>{item.title}</p>
          <p className='tile'>{item.contact}</p>
          <p className='tile'>{item.date}</p>
          <p className='tile'>{item.time}</p>
        </div>)
      })}</div> : 
      <div>{contacts.map((item, index) => {
        return (
        <div key={index}>
          <p className='tile-title'>{item.name}</p>
          <p className='tile'>{item.phone}</p>
          <p className='tile'>{item.email}</p>
        </div>)
      })}</div>}
    </div>
  );
};
