import './App.css';
import React from 'react';
import axios from 'axios';
import Board from './components/Board'
import BoardList from './components/BoardList'
import NewBoardForm from './components/NewBoardForm';
import Card from './components/Card'
import CardList from './components/CardList'
import NewCardForm from './components/NewCardForm'

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
      <NewBoardForm addBoardCallback={addBoard} />
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
