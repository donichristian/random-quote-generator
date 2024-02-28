
  <div align="center">
  <h1 align="center">Random Quote Generator</h1>
  <h3>Codebase for the Random Quote Generator</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat-square" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat-square" alt='Vite\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-ESLint-004E89?logo=ESLint&style=flat-square" alt='ESLint\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20dom-004E89?logo=React%20dom&style=flat-square" alt='React-dom\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Swc-004E89?logo=Swc&style=flat-square" alt='Swc"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This project is a Random Quote Generator, designed to display a new inspiring or thought-provoking quote each time it's accessed. It provides users with a refreshing experience by presenting them with diverse quotes from various sources.

The Random Quote Generator is built using JavaScript, React, and Vite. JavaScript is used to handle the logic behind generating and displaying random quotes. React is employed for building the user interface, ensuring a dynamic and responsive experience. Vite is utilized as the build tool to optimize the development workflow, providing fast and efficient bundling and serving of the project.

With its intuitive interface and seamless integration of modern web technologies, this Random Quote Generator offers users a simple yet engaging way to discover new quotes and find inspiration.

---

## 🌟 Features

 JavaScript, React, Vite, ESLint

---

## 📁 Repository Structure

```sh
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── src
│   ├── main.jsx
│   ├── quote.css
│   └── quote.jsx
├── vite.config.js
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| main.jsx |  The code renders a React component named Quote in the root element of the HTML document with ID root |
| quote.jsx |  The code defines a functional component called Quote that renders a QuoteBox component, which displays a random quote from an array of objects. The Quote component uses the useState hook to create a state variable quote and its setter function setQuote, with initial value obtained from quoteList. The Quote component also defines a function handleNewQuote to set a new quote by randomly selecting one from quoteList. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin and exports a default configuration object with the plugin added to the plugins array. |

</details>

---

## 🚀 Getting Started

 To get started with this project, follow these steps:<br>
1. Install the dependencies by running `yarn` or `npm install` in your terminal.
2. Start the development server by running `yarn dev` or `npm run dev`. This will start a development server at <http://localhost:3000/>.
3. Open the project in your preferred code editor and start exploring the code.
4. To build the project for production, run `yarn build` or `npm run build`. This will create a production-ready build of the project in the `dist` directory.
5. To preview the production build, run `yarn preview` or `npm run preview`. This will open the production build in your default web browser.

That's it! You should now be able to use this project as a starting point for your own React application.

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
