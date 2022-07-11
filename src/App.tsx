import React from "react";

import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="App">
      {/* <ContactForm /> */}
      <ContactsList />
    </div>
  );
}

export default App;
