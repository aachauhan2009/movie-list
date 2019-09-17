import React from 'react';
import Header from "./components/Header";
import Movies from "./components/Movies";
import './App.css';

const App = () => (
  <div>
    <header className="app-header">
      <Header />
    </header>
    <section className="app-main-container">
      <Movies />
    </section>
  </div>
);

export default App;
