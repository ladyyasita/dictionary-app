import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary dafaultKey="sun"/>
        </main>
        <footer className="App-footer">
             <footer>
          This project was coded by{" "}
          <a href="https://github.com/aigib" target="_blank" rel="noreferrer">
            Iaroslava Pozniak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ladyyasita/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://iaroslavas-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
