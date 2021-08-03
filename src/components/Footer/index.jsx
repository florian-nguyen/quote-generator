import React from "react";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	font-size: 0.9rem;

	padding: 1rem 0;
`;

const Link = styled.a`
	font-weight: 700;
	color: orangered;
`;

const Footer = () => {
	return (
		<Container>
			created by <Link>Florian NGUYEN</Link>- devChallenges.io
		</Container>
	);
};

export default Footer;
