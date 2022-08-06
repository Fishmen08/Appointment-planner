import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const contactsList = props.contactsList;
  const addContacts = props.onAddContacts;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === true) {
      alert('Please choose a name that isn\'t taken'); 
      return;
    };
    if (duplicate === false){
    addContacts(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');}
  };

  useEffect(() => {
    const dup = contactsList.filter(element => element.name === name);
    if (dup.length > 0) {
      setDuplicate(true);
      return;
    }
    setDuplicate(false);

  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} setName={setName}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactsList={contactsList} />
      </section>
    </div>
  );
};
