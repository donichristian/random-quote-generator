import { useState } from "react";
import PropTypes from 'prop-types';
import './quote.css';

// Define an array of objects, each containing a text and author property
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

// Define a functional component called QuoteBox that takes in props 'quote' and 'handleNewQuote'
const QuoteBox = ({ quote, handleNewQuote }) => {
  // Define a state variable 'key' and a function 'setKey' to update it
  const [key, setKey] = useState(0);

  // Define a function 'handleNewQuoteClick' that updates the 'key' state and calls 'handleNewQuote'
  const handleNewQuoteClick = () => {
    setKey(prevKey => prevKey + 1);
    handleNewQuote();
  };

  // Return JSX for the QuoteBox component
  return (
    <div id="quote-box" key={key}>
      <h2 id="text">{quote.text}</h2> {/* Display the text of the quote */}
      <p id="author">--{quote.author}</p> {/* Display the author of the quote */}
      <div className="clickable">
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
        >
          Tweet
        </a>
        <button id="new-quote" className="button" onClick={handleNewQuoteClick}>
          New quote
        </button>
      </div>
    </div>
  );
};

// Adding PropTypes to specify the expected types for the props passed to QuoteBox
QuoteBox.propTypes = {
    handleNewQuote: PropTypes.func.isRequired,
    quote: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
    }).isRequired,
};

// This is a functional component called Quote
const Quote = () => {
  // Using the useState hook to create a state variable quote and its setter function setQuote, with initial value obtained from quoteList
  const [quote, setQuote] = useState(() => quoteList[Math.floor(Math.random() * quoteList.length)]);

  // Defining a function handleNewQuote to set a new quote by randomly selecting one from quoteList
  const handleNewQuote = () => {
    setQuote(() => quoteList[Math.floor(Math.random() * quoteList.length)]);
  };

  // Returning JSX to render the Quote component, which includes the QuoteBox component
  return (
    <div className="container">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

// Exporting the Quote component as the default export
export default Quote;
