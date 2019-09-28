import React from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';



function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}


class App extends React.Component {

  state = {
    store: STORE,
  };
 
  


handleDelete = (cardId) => {

 const {lists, allCards} = this.state.store;

 const newLists = lists.map(list => ({...list, 
  cardIds: list.cardIds.filter(id => id !== cardId)}));

  const newCards = omit(allCards, cardId);
 
this.setState({
  store:{
    lists: newLists,
    allCards: newCards
  }
})
};

handleRandomCard =(listId) => {

  const newCard = newRandomCard();

  const newLists = this.state.store.lists.map(list => {
    if (list.id === listId) {
      return {
        ...list,
        cardIds: [...list.cardIds, newCard.id]
      };
    }
    return list;
  })

this.setState({
  store: {
    lists: newLists,
    allCards: {
      ...this.state.store.allCards,
      [newCard.id]: newCard
    }
  }
})
};

render() {
  const {store} = this.state
  
  return (
     <main className='App'>
        <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {store.lists.map(list => {
        return (
          <List id= {list.id} list = {list} allCards={this.state.store.allCards}
          onClickRandomCard={this.handleRandomCard}
          onClickDelete={this.handleDelete}/>
          
        )
      })}

    </div>
      
    </main>
  );
}}

export default App;