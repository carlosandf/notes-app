import React, { memo } from 'react';
import { deleteNote } from '../services/notes';

const Note = ({ title, body, date, id, setNotes}) => {
	
	const handleDelete = () => {
		deleteNote(id)
			.then(data => setNotes(data))
	}
	return (
		<li>
			<h3>{title}</h3>
			<p>{body}</p>
			<i>{date.split(' ').slice(0,4).join(' ')}</i>
			<button onClick={handleDelete}>Borrar</button>
		</li>
	);
};

export default memo(Note);