import axios from 'axios';

const createNote = (API , noteToAdd) => {
	return (
		axios
			.post(API, noteToAdd)
			.then(({ data }) => data)
	);
};

const getAllNotes = (API) => {
	return (
		axios
			.get(API)
			.then(({data}) => data)
	);
};
export { createNote, getAllNotes };