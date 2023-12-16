import React from 'react';

const Person = ({ personData }) => {
  if (!personData) {
    return null;
  }

  const { firstName, lastName, email } = personData;

  return (
    <ul>
      <li>First name: {firstName}</li>
      <li>Last name: {lastName}</li>
      <li>Email: {email}</li>
    </ul>
  );
};

export default Person;
