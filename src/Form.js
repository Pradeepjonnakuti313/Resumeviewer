import React, { useState } from 'react';
import axios from 'axios';
import "./Styles/Form.css"

const Form = ({ addNewEntry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [photo, setPhoto] = useState('');
  const [number, setNumber] = useState(''); 


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://65b77f9e46324d531d54bc37.mockapi.io/entries', {
        name,
        email,
        number,
        skills,
        photo
      });
      console.log("Data added: ", response.data);
      addNewEntry(response.data); 
      setName('');
      setEmail('');
      setNumber('');
      setSkills('');
      setPhoto('');
    } catch (error) {
      console.error('Error adding data: ', error);
    }
  };

  return (
    <div className='form_data'>
      <h1>Resume viewer</h1>
    <form onSubmit={handleSubmit} className='formdetails'>
      <h3>Enter details👇</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Mobile' required/>
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills"
        required
      />
      <input
        type="url"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="Photo URL"
        required
      />
      <button type="submit">Add Entry</button>
    </form>
    </div>
  );
};

export default Form;


