// Note.js
import React from 'react';

const Note = ({ title, content, createdDate, image }) => {
  const formattedDate = createdDate.toLocaleDateString();

  function handleClick() {
    alert(`Title: ${title}, Created on: ${formattedDate}`);
  }
  
  return (
    <div className="note" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{formattedDate}</p>
      {image && <img src={image} alt="Note" />}
    </div>
  );
};

export default Note;