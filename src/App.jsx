import { useEffect, useState } from 'react';
import Notes from './containers/Notes';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes(API)
      .then(data => {
        setNotes([...data]);
        setLoading(false);
      })
  }, []);

  const handleChange = ({ target }) => {
    setNewNote(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAdd = {
      title: newNote,
      body: newNote,
      userId: 1
    }
    createNote(API, noteToAdd)
      .then(data => setNotes(prev => [...prev, data]))

    setNewNote('');
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      {
        loading 
          ? <p>Cargando...</p> 
          : <Notes notes={notes} />
      }
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
