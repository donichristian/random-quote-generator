import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './quote.css';

const quoteList = [
  {
    text: `Dreaming, after all, is a form of planning.`,
    author: "Gloria Steinem",
  },
  {
    text: `It does not matter how slowly you go as long as you do not stop.`,
    author: "Confucius",
  },
  {
    text: `Do what you can, where you are, with what you have.`,
    author: "Teddy Roosevelt",
  },
  {
    text: `I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
    author: "Maya Angelou",
  },
  {
    text: `Life is 10% what happens to me and 90% of how I react to it.`,
    author: "Charles Swindoll",
  },
  {
    text: `In order to succeed, your desire for success should be greater than your fear of failure.`,
    author: "Bill Cosby",
  },
  {
    text: `We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.`,
    author: "Plato",
  },
  {
    text: `The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.`,
    author: "Jesse Owens",
  },
  {
    text: `Fall seven times and stand up eight.`,
    author: "Japanese Proverb",
  },
  {
    text: `Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.`,
    author: "Robert Frost",
  },
];

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
  <div id="quote-box" className={fadeIn ? "fade-in" : ""}>
    <h2 id="text">{quote.text}</h2>
    <p id="author">--{quote.author}</p>
    <div className="clickable">
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
      >
        Tweet
      </a>
      <button id="new-quote" className="button" onClick={handleNewQuote}>
        New quote
      </button>
    </div>
  </div>
  );
};

QuoteBox.propTypes = {
    handleNewQuote: PropTypes.func.isRequired,
    quote: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
    }).isRequired,
};

const getRandomQuote = () => Math.floor(Math.random() * quoteList.length);

const Quote = () => {
  const [quote, setQuote] = React.useState(quoteList[getRandomQuote()]);

  const handleNewQuote = () => {
    setQuote(quoteList[getRandomQuote()]);
  };

  return (
    <div className="container">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

export default Quote
