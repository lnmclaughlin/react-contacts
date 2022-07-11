import { FormEvent, useState } from "react";
import "./ContactForm.css";
import ContactModel from "../models/Contact";

interface Props {
  addContact?: (contact: ContactModel) => void;
}

const ContactForm = ({ addContact }: Props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    addContact!({ fullName, phoneNumber: +phoneNumber, favorite: false });
    setFullName("");
    setPhoneNumber("");
  };
  return (
    <form className="ContactForm" onSubmit={submitHandler}>
      <input
        type="text"
        name="fn"
        id="fn"
        placeholder="Enter Full Name"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Enter Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <button>Add Contact</button>
    </form>
  );
};

export default ContactForm;
