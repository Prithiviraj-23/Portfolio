import React from 'react';
import { MemoryRouter, Route, Link ,Routes,HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />
		<Routes>
        <Route exact path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
		</Routes>
      </div>
    </HashRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
