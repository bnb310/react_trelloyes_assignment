import React from 'react';
import Cards from './Card';
import STORE from './store';

function List(props) {
  const array = STORE;
  const cards = array.map(() =>
    <Card title = {STORE.allCards.title} content = {STORE.allcards.content} key = {STORE.allcards.id} />
  )
  return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {cards}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
  )  
}

export default List(props);
