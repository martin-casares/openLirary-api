import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import { Book } from './Book';

export const BookList = ({ searchTerm }) => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		try {
			const response = await axios.get(
				`https://openlibrary.org/search.json?q=${searchTerm}&limit=20`
			);
			// Extraer datos relevantes de la respuesta
			const bookData = response.data.docs.map((book) => ({
				title: book.title,
				author: book.author_name ? book.author_name.join(', ') : 'Desconocido',
				coverId: book.cover_i,
				// Construir la URL de la portada utilizando el identificador cover_i
				coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
				first_publish_year: book.first_publish_year,
				version: book._version_,
				key: book.key,
			}));

			setBooks(bookData);
			//	console.log(response);
			setLoading(true);
		} catch (error) {
			console.error('Error al realizar la búsqueda:', error);
		}
	};

	useEffect(() => {
		getData();
	}, [searchTerm]);

	return (
		<div>
			{loading ? (
				<Row xs={1} md={2} lg={4} className="m-3">
					{books.map((book) => {
						return (
							<Col key={book.version}>
								<Book book={book} />
							</Col>
						);
					})}
				</Row>
			) : (
				<p>Cargando...</p>
			)}
		</div>
	);
};
