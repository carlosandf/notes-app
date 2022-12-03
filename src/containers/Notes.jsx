import React, { memo } from 'react';
import Note from '../components/Note';

const Notes = ({ notes, setNotes }) => {

	return (
		<ol>
			{notes.map(note => (
				<Note
					key={note.id}
					{...note}
					setNotes={setNotes}
				/>
			))}
		</ol>
	);
};

export default memo(Notes);