import React, { useState } from "react";
import ContactCollection from "../api/ContactCollection";

export default ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = (event) => {
    event.preventDefault();
    ContactCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="imageUrl">ImageUrl</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={saveContact}>Save Contact</button>
      </div>
    </form>
  );
};
