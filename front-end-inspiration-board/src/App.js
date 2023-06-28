import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [boards, setBoards] = React.useState([])
  const [cards, setCards] = React.useState([])

  return (
    <main className='App'>
      <h1>Inspiration Board</h1>
      <BoardList
        board_id={board_id}
        owner={owner}
        title={title}
      />
      <BoardForm addBoardCallback={addBoard} />
      <Board />
      <NewCardForm addCardCallback={addCard} />
      <CardList
        card_id={card_id}
        likes_count={likes_count}
        message={message}
      />
      <Card />
    </main>
  );
}

export default App;
