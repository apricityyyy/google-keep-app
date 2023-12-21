// Note.js
import React from 'react';

const Note = ({ title, content, createdDate, image }) => {

  function handleClick() {
    alert(`Title: ${title}, Created on: ${createdDate}`);
  }

  const imagePath = image ? require(`.${image.substring(1)}`) : '';

  return (
    <div className="note" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{createdDate}</p>
      {image && <img src={imagePath} alt="Note" />}
    </div>
  );
};

export default Note;