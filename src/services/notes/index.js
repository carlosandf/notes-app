import axios from 'axios';

const API = 'https://notes-app-api.onrender.com/api/notes';

const createNote = (noteToAdd) => {
	return (
		axios
			.post(API, noteToAdd)
			.then(({ data }) => data)
	);
};

const getAllNotes = () => {
	return (
		axios
			.get(API)
			.then(({ data }) => data)
	);
};

const deleteNote = (id) => {
	return (
		axios
			.delete(`${API}/${id}`)
			.then(({ data }) => data)
	)
}

export { createNote, getAllNotes, deleteNote };