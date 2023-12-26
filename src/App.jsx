import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AppRouter } from './router/AppRouter';
import { ProtectedRoutes } from './router/ProtectedRoutes';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { About } from './pages/About';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route
					path="/*"
					element={
						<ProtectedRoutes>
							<AppRouter />
						</ProtectedRoutes>
					}
				/>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<AppRouter />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
