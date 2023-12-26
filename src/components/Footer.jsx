import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="" style={{ margin: '3rem' }}>
			<h2>Api Libros</h2>
			<div>
				<p>MartiyoDev - 2023</p>
				<a href="https://github.com/martiyoDev">
					<FaGithub size={30} color="#b8860b" />
				</a>
			</div>
		</div>
	);
};
