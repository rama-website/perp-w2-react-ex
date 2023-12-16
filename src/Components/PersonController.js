import React, { useState } from 'react';
import Person from './Person';

const PersonController = () => {
  const [personData, setPersonData] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const { name, email } = data.results[0];
      const formattedPersonData = { firstName: name.first, lastName: name.last, email };
      setPersonData(formattedPersonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    getPerson();
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Data</button>
      <Person personData={personData} />
    </div>
  );
};

export default PersonController;

