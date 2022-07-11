import "./Contact.css";
import ContactModel from "../models//Contact";

interface Props {
  contact: ContactModel;
  onDelete: () => void;
  flipFav: () => void;
}
const Contact = ({ contact, onDelete, flipFav }: Props) => {
  return (
    <div className="Contact">
      <p>Name: {contact.fullName}</p>
      <p>Number: {contact.phoneNumber}</p>

      <div className="icon-container">
        <i
          className={`fa-solid fa-heart ${contact.favorite ? " fav" : ""}`}
          onClick={flipFav}
        ></i>
        <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
      </div>
    </div>
  );
};

export default Contact;
