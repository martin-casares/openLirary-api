import React, { useState } from 'react';

import { BookList } from '../components/BookList';
import { BookSearch } from '../components/BookSearch';
import { Header } from '../components/Header';

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState('javascript');
	return (
		<div>
			<Header />
			<BookSearch setSearchTerm={setSearchTerm} />
			<BookList searchTerm={searchTerm} />
		</div>
	);
};
