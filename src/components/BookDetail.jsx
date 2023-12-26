import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const BookDetail = () => {
	const { key } = useParams();
	const [book, setBook] = useState('');

	const url = `https://openlibrary.org/works/${key}.json`;

	// Buscar por key en la api
	useEffect(() => {
		const getBookByKey = async () => {
			try {
				const response = await axios.get(url);

				// Verificar si se encontró un libro con el key proporcionado
				if (response.data) {
					setBook({
						title: response.data.title,
						subtitle: response.data.subtitle,
						first_publish_year: response.data.first_publish_year,
						author: response.data.author_name
							? response.data.author_name.join(', ')
							: 'Desconocido',
						coverId: response.data.cover_i,
						description: response.data.description
							? response.data.description.value
							: 'Sin descripción disponible',
						// Construir la URL de la portada utilizando el identificador cover_i
						coverUrl: `https://covers.openlibrary.org/b/id/${response.data.covers[0]}-L.jpg`,
					});
					// console.log(response);
				} else {
					setBook(null);
					console.log('Libro no encontrado');
				}
			} catch (error) {
				console.error('Error al realizar la búsqueda:', error);
			}
		};

		getBookByKey();
	}, [key]);

	return (
		<>
			<div className="my-5 container text-center">
				{book ? (
					<div className="row g-5">
						<div className="col">
							<img
								src={book.coverUrl}
								alt={book.title}
								style={{
									width: '60%',
									height: '90%',
									maxHeight: '600px',
								}}
							/>
						</div>
						<div className="col d-flex flex-column justify-content-center align-items-center">
							<h2 style={{ textAlign: 'center' }}>{book.title}</h2>
							<h3>{book.subtitle}</h3>
							<p>{book.author}</p>
							<p>{book.first_publish_year}</p>
							<p>{book.description && book.description.substring(0, 360)}...</p>
							<button className="btn fw-bold" style={{ backgroundColor: '#b8860b' }}>
								Agregar a favoritos
							</button>
						</div>
					</div>
				) : (
					<p>Imagen no disponible...</p>
				)}
			</div>
			<div className="text-center">
				<Link
					to="/"
					className="btn fw-bold"
					style={{ backgroundColor: '#b8860b', color: 'white' }}
				>
					Inicio
				</Link>
			</div>
		</>
	);
};
