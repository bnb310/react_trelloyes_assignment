import React from 'react';
import './App.css';
import List from './List';
import Card from './Card';
import STORE from './store';

function App(props) {
  const array = STORE;
  const cards = array.map(() =>
    <List title = {STORE.allCards.title} content = {STORE.allcards.content} key = {STORE.allcards.id} />
  )
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">

    </div>
  </main>
  );
}

export default App;
