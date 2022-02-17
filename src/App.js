import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App">
          <img src={logo} className="App-logo" alt="Lexicon Logo" />
        </header>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/rubinder/"
            target="blank"
            rel="noopener noreferrer"
          >
            Rubinder {""}
          </a>
          and is {""}
          <a
            href="https://github.com/RubinderG/Dictionary-project"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
