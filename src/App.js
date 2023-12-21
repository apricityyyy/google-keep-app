// App.js
import React from 'react';
import Note from './Note';
import './App.css'
import Header from './Header'; 
import Footer from './Footer'; 
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        {notes.map((note, index) => (
          <Note key={index} {...note} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;