import { useEffect, useState } from 'react';
import { getAllNotes, createNote } from './services/notes/';
import Notes from './containers/Notes';
import './App.css';

const API = 'https://notes-app-api.onrender.com/api/notes';

const NOTE_INITIAL_VALUE = {
  title: '',
  body: ''
}
function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(NOTE_INITIAL_VALUE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes(API)
      .then(data => {
        setNotes([...data]);
        setLoading(false);
      })
  }, []);


  const handleChangeTitle = ({ target }) => {
    setNewNote({
      ...newNote,
      title: target.value
    });
  }
  const handleChangeBody = ({ target }) => {
    setNewNote({
      ...newNote,
      body: target.value
    });
  }

  // Enviar datos al servidor
  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAdd = {
      ...newNote
    }
    createNote(API, noteToAdd)
      .then(data => setNotes(prev => [...prev, data]))

    setNewNote(NOTE_INITIAL_VALUE);
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
        <input type="text" value={newNote.title} onChange={handleChangeTitle} />
        <input type="text" value={newNote.body} onChange={handleChangeBody} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
