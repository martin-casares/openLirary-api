import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let users = JSON.parse(localStorage.getItem('users'));

	const handleSubmit = (e) => {
		e.preventDefault();
		const foundUser = users.find(
			(user) => user.email === email && user.password === password
		);

		if (!email || !password) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Todos los campos son obligatorios!',
			});
		} else if (foundUser) {
			console.log('Iniciaste sesion');
			localStorage.setItem('user', JSON.stringify(foundUser));
			navigate('/', { replace: true });
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Usuario o contraseña incorrectos!',
			});
		}
	};

	return (
		<div className="m-3 mt-5 py-5 col-md-5 col-lg-4 col-xl-4 mx-auto">
			<div className="card mt-4 text-center">
				<h2 className="fw-bold text-center card-header">Login</h2>
				<div className="card-body">
					<div className="from-group">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-4 mt-5" controlId="Email">
								<Form.Control
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className="mb-5" controlId="Password">
								<Form.Control
									type="password"
									value={password}
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<div className="my-3">
								<small>
									No estas registrado? <Link to="/register">Registrate</Link>
								</small>
							</div>

							<Button
								type="submit"
								value="Login"
								className="btn btn-warning fw-bold"
							>
								Login
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
