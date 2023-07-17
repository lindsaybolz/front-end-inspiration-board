import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import Card from './components/Card';
import CardList from './components/CardList';
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
  const [currentBoard, setCurrentBoard] = React.useState()
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    axios.get('https://m-cubed-api.onrender.com/boards')
      .then(response => {
        setBoards(response.data)
      })
  }, []);


  // const toggleLike = (id) => {
  //   setBoards(prevBoards => {
  //     const updatedBoards = prevBoards.map(board => {
  //       return board.id===id ? {...board, liked: !board.liked} : entry
  //     })
  //     return updatedBoards;
  //   })
  // };


  const addBoard = (newBoardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards`, newBoardData)
      .then((response) => {
        const newBoards = [...boards];

        newBoards.push({
          board_id: response.data.id,
          owner: response.data.owner,
          title: response.data.title,
        });

        setBoards(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // once we code the board selector list so that people can select the board
  // it will call this changeBoard function with the approproate board_id
  const changeBoard = (board_id) => {
    for (Board in boards){
      if (Board.board_id==board_id) {
        setCurrentBoard(Board)
      } 
  }
};

  return (
    <main className='App'>
      <h1>Inspiration Board</h1>
      <BoardList
        boards={boards}
      />
      <NewBoardForm addNewBoardCallback={addBoard} />
      <Board />
      {/* <NewCardForm addCardCallback={addCard} /> */}
      <CardList
        cards={cards}
      />
      <Card />
    </main>
  );
}

export default App;
