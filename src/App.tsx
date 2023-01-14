import React from 'react';
import Form from './components /Form';
import MovieList from './components /MovieList';
import Search from './components /Seacrch';


import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <MovieList />
      <Search />
    </div>
  );
}

export default App;
