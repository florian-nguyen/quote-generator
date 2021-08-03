import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineRefresh } from "react-icons/hi";

const Container = styled.div`
	width: 100%;
	margin: 1rem 0;
	max-height: 20vh;

	display: flex;
	flex-direction: row-reverse;
`;

const RandomButton = styled.button`
	outline: none;
	border: 2px solid transparent;
	background-color: transparent;
	border-radius: 2rem;
	padding: 0.25rem 2rem;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;

	font-family: inherit;
	font-weight: 600;
	color: #4f4f4f;

	transition: all 0.3s ease-in-out;
	cursor: pointer;

	& svg {
		transition: all 0.3s ease-in-out;
	}

	&:hover {
		border: 2px solid #f7df94;
		background-color: #f7df94;
		color: black;
		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
	}

	&:hover > svg {
		transform: rotate(-45deg);
	}
`;

const Header = ({ action }) => {
	return (
		<Container>
			<RandomButton onClick={action}>
				<p>random</p>
				<HiOutlineRefresh size={20} />
			</RandomButton>
		</Container>
	);
};

export default Header;
