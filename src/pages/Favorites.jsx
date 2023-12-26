import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export const Favorites = () => {
	// Supongamos que tienes una lista de libros favoritos en tu estado local
	const [favoriteBooks, setFavoriteBooks] = useState([
		{
			id: 1,
			title: 'Libro 1',
			description: 'Descripción del Libro 1',
			imageUrl: 'URL de la imagen del Libro 1',
		},
		{
			id: 2,
			title: 'Libro 2',
			description: 'Descripción del Libro 2',
			imageUrl: 'URL de la imagen del Libro 2',
		},
		// Agrega más libros según sea necesario
	]);

	return (
		<Container className="mt-5">
			<h2 className="mb-4">Libros Favoritos</h2>
			<Row xs={1} md={2} lg={3} className="g-4">
				{favoriteBooks.map((book) => (
					<Col key={book.id}>
						<Card className="h-100">
							<Card.Img variant="top" src={book.imageUrl} alt={book.title} />
							<Card.Body>
								<Card.Title>{book.title}</Card.Title>
								<Card.Text>{book.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
