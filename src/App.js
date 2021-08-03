import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomQuoteDisplay from "./components/RandomQuoteDisplay";
import AuthorQuoteDisplay from "./components/AuthorQuoteDisplay";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto auto;
	width: 80%;
	height: 100%;
`;

function App() {
	const base_url = "https://quote-garden.herokuapp.com/api/v3";

	const [quote, setQuote] = useState(null);
	const [authorQuotes, setAuthorQuotes] = useState([]);
	const [menu, setMenu] = useState("random");

	const getRandomQuote = async () => {
		const params = {
			// author:,
			// genre:,
			// query:,
			page: 1,
			limit: 1,
		};

		const url = encodeURI(base_url + "/quotes/random");
		const quote = await axios
			.get(url, { params })
			.then((response) => response.data.data[0])
			.catch((error) => console.log(error));

		setMenu("random");
		setAuthorQuotes([]);
		setQuote(quote);
	};

	const getThreeQuotesFromAuthor = async (authorName) => {
		const params = {
			author: authorName,
			// genre:,
			// query:,
			// page: 1,
			limit: 3,
		};

		const url = encodeURI(base_url + "/quotes");
		const quotes = await axios
			.get(url, { params })
			.then((response) => response.data.data)
			.catch((error) => console.log(error));

		setAuthorQuotes(quotes);
		setQuote(null);
	};

	const handleAuthorButtonClick = async (e) => {
		await getThreeQuotesFromAuthor(quote.quoteAuthor).then(() => {
			setMenu("author");
			console.log(authorQuotes);
		});
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<Container>
			<Header action={getRandomQuote} />

			<AnimatePresence>
				{menu === "random" && (
					<RandomQuoteDisplay
						quote={quote}
						buttonAction={handleAuthorButtonClick}
					/>
				)}

				{menu === "author" && <AuthorQuoteDisplay quotes={authorQuotes} />}
			</AnimatePresence>
			<Footer />
		</Container>
	);
}

export default App;
