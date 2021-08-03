import React from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* flex: 1; */
	gap: 1rem;
	padding: 0 12%;
	/* max-height: 50%; */
	max-height: 60vh;
`;

const QuoteList = styled(motion.div)`
	overflow-y: auto;
	overflow-x: hidden;

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 3px;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 3px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const QuoteContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	width: 100%;

	padding: 0 10%;
`;

const QuoteSection = styled(motion.div)`
	padding: 0.5rem 4rem;
	margin: 1.5rem 0;

	font-size: 1.25rem;
	font-weight: 500;
	border-left: 8px solid #f7df94;
`;

const AuthorSection = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	outline: none;
	border: none;
	background-color: transparent;
	text-align: left;
	padding: 1.5rem 4rem 0;
	margin: 0;

	transition: all 0.4s ease-in;
`;

const AuthorName = styled.p`
	font-weight: 700;
	font-size: 1.1rem;
	color: #4f4f4f;
	margin: 0.5rem 0;
	padding: 0;
`;

const AuthorQuoteDisplay = ({ quotes }) => {
	return (
		<Container>
			<AnimatePresence>
				{quotes && (
					<QuoteContainer
						key="author-container"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<AuthorSection>
							<div>
								<AuthorName>{quotes[0].quoteAuthor}</AuthorName>
							</div>
						</AuthorSection>
					</QuoteContainer>
				)}
				<QuoteList>
					{quotes &&
						quotes.map((quoteItem) => (
							<QuoteContainer
								key="quote-container"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1 }}
							>
								<QuoteSection>"{quoteItem.quoteText}"</QuoteSection>
							</QuoteContainer>
						))}
				</QuoteList>
			</AnimatePresence>
		</Container>
	);
};

export default AuthorQuoteDisplay;
