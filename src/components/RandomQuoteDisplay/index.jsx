import React from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 1rem;
	padding: 0 12%;
	height: 100%;
	max-height: 60vh;
`;

const QuoteContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	padding: 50 10%;
`;

const QuoteSection = styled(motion.div)`
	padding: 1rem 4rem;

	font-size: 1.5rem;
	font-weight: 500;
	border-left: 8px solid #f7df94;

	max-height: 40vh;
	overflow: hidden;
	overflow: auto;
`;

const AuthorSection = styled(motion.button)`
	display: flex;
	justify-content: space-between;
	outline: none;
	border: none;
	background-color: transparent;
	text-align: left;
	padding: 1.5rem 4rem;
	margin: 0;

	transition: all 0.4s ease-in;

	cursor: pointer;

	&:hover {
		background-color: #333333;

		& p {
			color: white;
		}

		& svg {
			color: white;
		}
	}
`;

const AuthorName = styled.p`
	font-weight: 700;
	font-size: 1.1rem;
	color: #4f4f4f;
	margin: 0.5rem 0;
	padding: 0;
`;

const Tag = styled.span`
	font-weight: 500;
	color: #828282;
	line-height: 1rem;
	margin: 0.5rem 0;
	padding: 0;
`;

const IconWrapper = styled.div`
	height: 100%;
	font-size: 1.5rem;
	color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RandomQuoteDisplay = ({ quote, buttonAction }) => {
	return (
		<Container>
			<AnimatePresence>
				{quote && (
					<QuoteContainer
						key="quote-container"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<QuoteSection>"{quote.quoteText}"</QuoteSection>
					</QuoteContainer>
				)}

				{quote && (
					<QuoteContainer
						key="author-container"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<AuthorSection onClick={buttonAction}>
							<div>
								<AuthorName>{quote.quoteAuthor}</AuthorName>
								<Tag>{quote.quoteGenre}</Tag>
							</div>
							<IconWrapper>
								<FaLongArrowAltRight />
							</IconWrapper>
						</AuthorSection>
					</QuoteContainer>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default RandomQuoteDisplay;
