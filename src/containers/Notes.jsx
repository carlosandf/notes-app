import React from 'react';
import Note from '../components/Note';

const Notes = ({ notes }) => {
	return (
		<ol>
			{notes.map(note => (
				<Note
					key={note.id}
					{...note}
				/>
			))}
		</ol>
	);
};

export default Notes;