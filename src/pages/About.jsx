import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
	return (
		<Container className="mt-5">
			<Row>
				<Col>
					<h2 className="mb-4">Sobre Nosotros</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacus
						ut mi accumsan, vel varius elit fringilla. Proin ac dapibus lacus. Donec
						gravida bibendum elit id sollicitudin. Nullam venenatis justo a risus
						ultricies, vel pharetra elit eleifend. Duis vestibulum, mauris a
						fermentum dapibus, libero augue vulputate metus, nec ultrices sem mauris
						id odio.
					</p>
					<p>
						Quisque laoreet elit vitae neque cursus, eu hendrerit elit aliquet.
						Nullam consequat, metus eu interdum tincidunt, sem nulla fermentum quam,
						vitae condimentum purus ligula ut dui. Integer ultrices augue ac neque
						interdum volutpat. Fusce varius odio in libero tincidunt, vel vulputate
						elit vestibulum. Suspendisse potenti. Duis elementum ultricies mauris,
						vitae tristique lacus imperdiet nec.
					</p>
				</Col>
			</Row>
		</Container>
	);
};
