import axios from 'axios';

export const getAllNotes = (API) => {
	return (
		axios
			.get(API)
			.then(({data}) => data)
	);
};
