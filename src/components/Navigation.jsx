import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';

export const Navigation = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/login', { replace: true });
	};

	return (
		<Navbar expand="lg" style={{ padding: ' 0.5rem 4rem' }}>
			<Navbar.Brand as={Link} to="/">
				<strong
					style={{ color: '#b8860b', fontSize: '40px', textTransform: 'uppercase' }}
				>
					Books
				</strong>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mx-auto fw-bold">
					<Nav.Link as={Link} to="/">
						<strong style={{ color: '#b8860b' }}>Inicio</strong>
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						<strong style={{ color: '#b8860b' }}>Sobre Nosotros</strong>
					</Nav.Link>
					{user ? (
						<Nav.Link as={Link} to="/favorites">
							<strong style={{ color: '#b8860b' }}>Favoritos</strong>
						</Nav.Link>
					) : (
						''
					)}
				</Nav>
				<Nav>
					{!user ? (
						<Nav.Link as={Link} to="/login">
							<FaUserCircle
								size={40}
								style={{ marginRight: '5px', color: '#b8860b' }}
							/>
							<strong style={{ color: '#b8860b' }}>Login</strong>
						</Nav.Link>
					) : (
						<NavDropdown
							title={
								<>
									{user.imgUrl ? (
										<>
											<img
												src={user.imgUrl}
												alt={user.username}
												width="45px"
												style={{
													borderRadius: '50%',
													marginRight: '10px',
													border: '1px solid gray',
												}}
											/>
											<strong style={{ color: '#b8860b', paddingTop: '4px' }}>
												{user.username}
											</strong>
										</>
									) : (
										<>
											<FaUserCircle
												size={40}
												style={{ marginRight: '5px', color: '#b8860b' }}
											/>
											<strong style={{ color: '#b8860b', paddingTop: '4px' }}>
												{user.username}
											</strong>
										</>
									)}
								</>
							}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item as={Link} to="/profile">
								<strong style={{ color: '#b8860b' }}>Profile</strong>
							</NavDropdown.Item>
							<NavDropdown.Item onClick={handleLogout}>
								<strong style={{ color: '#b8860b' }}>Logout</strong>
							</NavDropdown.Item>
						</NavDropdown>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
