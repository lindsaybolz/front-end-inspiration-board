import './App.css';
import React from 'react';
import axios from 'axios';
import Board from './components/Board'
import BoardList from './components/BoardList'
import NewBoardForm from './components/NewBoardForm';
import Card from './components/Card'
import CardList from './components/CardList'
import NewCardForm from './components/NewCardForm'


const boardData = [
  {
    board_id: 1, 
    owner: "Winslow", 
    title: "My Favortie Mushrooms"
  }, 
  {
    board_id: 2, 
    owner: "Stacey", 
    title: "Learning about local mushrooms"
  }, 
  {
    board_id: 3, 
    owner: "Mikelle", 
    title: "Mushroom Manicures"
  }
]

function App() {
  const [boards, setBoards] = React.useState(boardData);

  // const toggleLike = (id) => {
  //   setBoards(prevBoards => {
  //     const updatedBoards = prevBoards.map(board => {
  //       return board.id===id ? {...board, liked: !board.liked} : entry
  //     })
  //     return updatedBoards;
  //   })
  // };

  const [cards, setCards] = React.useState([])

  return (
    <main className='App'>
      <h1>Inspiration Board</h1>
      <BoardList
        boards={boards}
      />
      <NewBoardForm addBoardCallback={addBoard} />
      <Board />
      <NewCardForm addCardCallback={addCard} />
      <CardList
        cards={cards}
      />
      <Card />
    </main>
  );
}

export default App;
