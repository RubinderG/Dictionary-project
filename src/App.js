import logo from "./logo.png";
import "./App.css";
import Lexicon from "./Lexicon.js";

export default function App() {
  return (
    <div className="background">
      <div className="App">
        <div className="container">
          <header className="App">
            <img src={logo} className="App-logo" alt="Lexicon Logo" />
          </header>
          <main>
            <Lexicon defaultKeyword="lexicon" />
          </main>
          <footer className="App-footer">
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
          <br />
        </div>
      </div>
    </div>
  );
}
