
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import "./Styles/List.css"
const List = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('https://65b77f9e46324d531d54bc37.mockapi.io/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchEntries();
  }, []);
  const addNewEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return (
    <div className="list-container">
      <Form addNewEntry={addNewEntry} />
      <h2>List of Entries</h2>
      <table className="entry-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id} className="entry-row">
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>
                <Link to={`/detail/${entry.id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
