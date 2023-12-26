import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { BookDetail } from '../components/BookDetail';
import { About } from '../pages/About';
import { Error404 } from '../pages/Error404';
import { Navigation } from '../components/Navigation';
import { Profile } from '../pages/Profile';
import { Footer } from '../components/Footer';
import { Favorites } from '../pages/Favorites';

export const AppRouter = () => {
	return (
		<div>
			{/* 	<Navigation /> */}
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				{/* 	<Route path="/about" element={<About />} /> */}
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/book/works/:key" element={<BookDetail />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			{/* 	<Footer /> */}
		</div>
	);
};
