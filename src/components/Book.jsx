import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

export const Book = ({ book }) => {
	return (
		<Card style={{ width: '18rem' }} className="m-3">
			<Card.Img
				variant="top"
				src={book.coverUrl}
				style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }}
			/>
			<Card.Body>
				<Card.Title>{book.title && book.title.substring(0, 21)}</Card.Title>
				<Link
					className="btn fw-bold "
					style={{ backgroundColor: '#b8860b' }}
					to={`/book${book.key}`}
				>
					Ver Mas
				</Link>
			</Card.Body>
		</Card>
	);
};
