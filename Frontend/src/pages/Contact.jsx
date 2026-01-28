import React, { useState } from "react";
import Service from "./Service";

const Contact = ({ c }) => {
  const [name, setName] = useState("Nuzha");

  const toggleName = () => {
    setName(name === "Nuzha" ? "Banu" : "Nuzha");
  };

  return (
    <div>
      <h1>{c}</h1>
      <h2>Name: {name}</h2>
      <button onClick={toggleName}>Toggle</button>
      <Service name={name} />
    </div>
  );
};

export default Contact;