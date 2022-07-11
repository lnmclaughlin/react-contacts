import { useState } from "react";
import Contact from "./Contact";
import ContactModel from "../models//Contact";
import "./ContactsList.css";
import ContactForm from "./ContactForm";

const ContactsList = () => {
  const [myContacts, setMyContacts] = useState<ContactModel[]>([
    { fullName: "Dad", phoneNumber: 1234567, favorite: true },
    { fullName: "Mom", phoneNumber: 3484958, favorite: true },
    { fullName: "Jack", phoneNumber: 3484908, favorite: true },
    { fullName: "Jessica", phoneNumber: 3498857, favorite: true },
    { fullName: "Charlie", phoneNumber: 3456789, favorite: false },
    { fullName: "Gus", phoneNumber: 2756093, favorite: false },
    { fullName: "Jenny", phoneNumber: 8675309, favorite: false },
  ]);
  const addContact = (contact: ContactModel) => {
    setMyContacts((prev) => [...prev, contact]);
  };

  const onDelete = (i: number): void => {
    setMyContacts((prev) => [...prev.slice(0, i), ...prev.slice(i + 1)]);
  };

  const flipFavorite = (index: number): void => {
    setMyContacts((prev) => {
      const copyOfArray: ContactModel[] = prev.slice(0);
      const copyOfContact: ContactModel = { ...copyOfArray[index] };
      copyOfContact.favorite = !copyOfContact.favorite;
      copyOfArray[index] = copyOfContact;
      return copyOfArray;
    });
  };
  return (
    <div className="ContactsList">
      <header>
        <h1>My Contacts</h1>
      </header>
      <ContactForm addContact={addContact} />
      <div className="contacts-container">
        <ul>
          {myContacts.map((c, i) => (
            <Contact
              key={`${i}${Math.random()}`}
              contact={c}
              onDelete={() => onDelete(i)}
              flipFav={() => flipFavorite(i)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsList;
