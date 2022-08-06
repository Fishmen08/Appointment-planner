import React from "react";

export const ContactPicker = (props) => {
  const list = (props.contactsList.map(item => item.name));

  return (
    <select name='contact' onChange={props.contactChange}>
      <option defaultValue key='default' value='empty'>Select contact</option>
      {list.map((item, index) => <option key={index}>{item}</option>)}
    </select>
  );
};
