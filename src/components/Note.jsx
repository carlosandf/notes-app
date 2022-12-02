import React from 'react';

const Note = ({ title, body, date }) => {
	return (
		<li>
			<h3>{title}</h3>
			<p>{body}</p>
			<i>{date.split(' ').slice(0,4).join(' ')}</i>
		</li>
	);
};

export default Note;