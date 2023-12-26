import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const BookSearch = ({ setSearchTerm }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === '') {
			setError(true);
			return;
		}
		//setError(false);
		setSearchTerm(value);
		setValue('');
	};

	return (
		<>
			<div className="d-flex justify-content-center mb-5">
				<form onSubmit={handleSubmit}>
					<div
						style={{
							backgroundColor: 'gray',
							padding: '12px 42px',
							outline: 'none',
							border: 'solid 1px #999',
							borderRadius: '35px',
							width: '800px',
							boxShadow: '2px 3px 5px #000',
							opacity: 0.9,
							marginBottom: '30px',
						}}
						className="d-flex"
					>
						<input
							className="form-control"
							style={{
								padding: '10px',
								outline: 'none', // Quitar el borde azul
								border: 'none',
								backgroundColor: 'gray',
								boxShadow: 'none',
								fontSize: '20px',
								fontWeight: 'bold',
							}}
							type="text"
							placeholder="Buscar Libro"
							onChange={(e) => setValue(e.target.value)}
							value={value}
						/>
						<button
							type="submit"
							className=""
							style={{
								color: 'white',
								backgroundColor: 'transparent',
								border: 'none',
							}}
						>
							<FaSearch className="" size={32} />
						</button>
					</div>
				</form>
				{error ? <p className="error">El campo no puede estar vacío..</p> : ''}
			</div>
		</>
	);
};
