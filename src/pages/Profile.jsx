import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

export const Profile = () => {
	const navigate = useNavigate();

	const users = JSON.parse(localStorage.getItem('users')) || [];
	const currentUser = JSON.parse(localStorage.getItem('user'));

	const currentUserIndex = users.findIndex((user) => user.id === currentUser.id);

	const [username, setUsername] = useState(users[currentUserIndex]?.username || '');
	const [email, setEmail] = useState(users[currentUserIndex].email || '');
	const [imgUrl, setImgUrl] = useState(users[currentUserIndex].imgUrl || '');
	const [description, setDescription] = useState(
		users[currentUserIndex].description || ''
	);

	const handleSaveProfile = () => {
		users[currentUserIndex] = {
			...users[currentUserIndex],
			username,
			imgUrl,
			email,
			description,
		};

		localStorage.setItem('users', JSON.stringify(users));
		navigate('/');
	};

	return (
		<div className="mt-4">
			<h2 style={{ color: '#b8860b', fontSize: '3rem', marginBottom: '4rem' }}>
				Profile Page
			</h2>

			<div className="row">
				<div className="col-md-4 mb-3 ">
					<div className="mt-3">
						<h4 className="fw-bold">Perfil Actual:</h4>
						<div className="mb-3">
							{imgUrl ? (
								<img
									src={imgUrl}
									alt="Image Profile"
									style={{
										width: '80%',
										height: 'auto',
										borderRadius: '50%',
										border: '1px solid #b8860b',
										boxShadow: '2px 2px 24px #111',
									}}
								/>
							) : (
								<FaUserCircle
									size={120}
									style={{ color: 'gray', marginRight: '5px' }}
								/>
							)}
						</div>
						<p>
							<strong>Nombre</strong>: {username}
						</p>
						<p>
							<strong>Correo</strong>: {email}
						</p>
					</div>
				</div>

				<div className="col-md-8 mt-3">
					<div className="mb-3">
						<label htmlFor="imgUrl" className="form-label">
							Imagen de Perfil (URL):
						</label>
						<input
							type="text"
							className="form-control"
							id="imgUrl"
							value={imgUrl}
							onChange={(e) => setImgUrl(e.target.value)}
						/>
					</div>
					<div className="mb-3 ">
						<label htmlFor="username" className="form-label">
							Nombre:
						</label>
						<input
							type="text"
							className="form-control"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Descripcion:
						</label>
						<textarea
							className="form-control"
							id="description"
							rows="3"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>

					<button
						className="btn  fw-bold"
						style={{ backgroundColor: '#b8860b' }}
						onClick={handleSaveProfile}
					>
						Actualizar Perfil
					</button>
				</div>
			</div>
		</div>
	);
};
