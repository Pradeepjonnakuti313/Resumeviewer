import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./Styles/Detail.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";



const Detail = () => {
  const { id } = useParams(); 
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`https://65b77f9e46324d531d54bc37.mockapi.io/entries/${id}`);
        setEntry(response.data);
      } catch (error) {
        console.error('Error fetching entry: ', error);
      }
    };

    fetchEntry();
  }, [id]);

  if (!entry) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="detail-container">
      {/* <h2>Entry Detail</h2> */}
      {/* <p>{entry.name}</p> */}
      <div className="detail-content">
        <h2>{entry.name}</h2>
        <p>Mail: {entry.email}</p>
        <p>Mobile: {entry.number}</p>
        <FaLinkedin className='icons' />
        <FaGithub className='icons'/>
        {entry.photo && (
          <div>
          <img src={entry.photo} alt={"default.jpg"} style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </div>
      )}
      <h3>Summary
      </h3>
      <p >To work with an organization with my knowledge and to 
develop my professional skills with learning new things and to experience my career 
growth and having a skills like {entry.skills}
</p>
        <p><h3>Professional Skills</h3> Programming Languages : {entry.skills}</p>
        <p><h3>Professional Experience</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic repellat placeat voluptatibus ut eius vero libero, voluptates alias nobis doloribus, dicta sed. Sint iure nisi eius illo sed dolor atque!</p>
        <p><h3>Languages</h3>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Telugu</li>
          </ul></p>
      </div>
       <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
};

export default Detail;
