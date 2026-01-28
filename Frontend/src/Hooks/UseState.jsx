import React, { useState } from 'react';

const UseStateExample = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />

        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseStateExample;