import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const nameChange =({target}) => {
    setName(target.value)
  }

  const phoneChange =({target}) => {
    setPhone(target.value)
  }

  const emailChange =({target}) => {
    setEmail(target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name: </label>
      <input id='name' value={name} onChange={nameChange} required type='text'></input>
      <label for='phone'>Phone:</label>
      <input id='phone' value={phone} onChange={phoneChange} type='tel' pattern='[0][\d]{9}' required />
      <label for='email'>Email:</label>
      <input id='email' value={email} onChange={emailChange} type='email' required></input>
      <input type='submit' value='submit'></input>
    </form>
  );
};
