import axios from 'axios';

export const createNote = (API , noteToAdd) => {
	return (
		axios
			.post(API, noteToAdd)
			.then(({ data }) => data)
	);
};