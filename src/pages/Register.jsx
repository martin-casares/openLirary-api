import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export const Register = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState(
		JSON.parse(localStorage.getItem('usuarios')) || []
	);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	class Usuario {
		constructor(id, username, email, password, imgUrl, description) {
			this.id = id;
			this.username = username;
			this.email = email;
			this.imgUrl = imgUrl;
			this.description = description;
			this.password = password;
		}
	}

	const handleRegister = (e) => {
		e.preventDefault();

		const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		const resultadoValidacion = validarEmail.test(email);

		if (!username || !email || !password || !confirmPassword) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Todos los campos son obligatorios!',
			});
			return;
		} else if (!resultadoValidacion) {
			Swal.fire({ icon: 'error', title: 'Oops...', text: 'Email no valido!' });
			return;
		} else if (password.length < 7) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'La contraseña debe ser mayor a 6 caracteres!',
			});
			return;
		} else if (password !== confirmPassword) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Las contraseñas deben ser iguales!',
			});

			return;
		}

		const existeEmail = users.some((user) => user.email === email);

		if (existeEmail) {
			Swal.fire({
				icon: 'error',
				title: 'Usuario Existente',
				text: 'El usuario ingresado ya esta registrado!',
			});
			return;
		}
		const id = Date.now().toString();
		const newUser = new Usuario(id, username, email, password);

		// Actualizar el estado de usuarios con el nuevo usuario
		setUsers((prevUsers) => [...prevUsers, newUser]);

		// Obtener los usuarios actuales del localStorage
		const currentUsers = JSON.parse(localStorage.getItem('users')) || [];

		// Guardar los usuarios en el localStorage (añadir el nuevo usuario)
		localStorage.setItem('users', JSON.stringify([...currentUsers, newUser]));

		Swal.fire({
			icon: 'success',
			title: 'Usuario	registrado correctamente',
			showConfirmButton: false,
			timer: 1500,
		}).then(() => {
			navigate('/login');
		});
	};

	return (
		<div className="mt-5 py-5 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
			<div className="card mt-4 bg-whitetext-center">
				<h2 className="fw-bold text-center	card-header">Registro</h2>
				<div className="card-body">
					<div className="form-group"></div>
					<Form onSubmit={handleRegister}>
						<Form.Group className="mb-4 mt-5" controlId="Username">
							<Form.Control
								name="username"
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}} /*
		onChange={handleChange}*/
							/>{' '}
						</Form.Group>{' '}
						<Form.Group className="mb-4" controlId="Email">
							{' '}
							<Form.Control
								name="email"
								type="text"
								placeholder="Email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}} /*
		onChange={handleChange} */
							/>{' '}
						</Form.Group>
						<Form.Group className="mb-4" controlId="Password">
							<Form.Control
								name="password"
								type="password"
								value={password}
								placeholder="Password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								/*onChange={handleChange}*/
							/>
						</Form.Group>
						<Form.Group className="mb-4" controlId="confirmPassword">
							<Form.Control
								name="confirmPassword"
								type="password"
								value={confirmPassword}
								placeholder="Confirmar
							Password"
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								/*onChange={handleChange}*/
							/>
						</Form.Group>
						<div className="my-3">
							<small>
								{' '}
								Ya estas registrado?
								<Link to="/login">Logeate</Link>
							</small>
						</div>
						<Button type="submit" value="Login" className="btn btn-warning fw-bold">
							Register
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};
