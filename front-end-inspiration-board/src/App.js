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
    id: 1, 
    owner: "Winslow", 
    title: "My Favortie Mushrooms"
  }, 
  {
    id: 2, 
    owner: "Stacey", 
    title: "Learning about local mushrooms"
  }, 
  {
    id: 3, 
    owner: "Mikelle", 
    title: "Mushroom Manicures"
  }
]

function App() {
  const [boards, setBoards] = React.useState(boardData);
  const [cards, setCards] = React.useState([])
  const [currentBoardId, setCurrentBoardId] = React.useState(0)

  useEffect(() => {
    axios.get('https://m-cubed-api.onrender.com/boards')
      .then(response => {
        const newBoards = response.data
        setBoards(newBoards)
      })
  }, []);

  const addLike = (id) => {
    axios.patch(`https://m-cubed-api.onrender.com/cards/${id}`)
      .then(response => {
        setCards(prevCards => {
            const updatedCards = prevCards.map(card => {
              return card.id===id ? {...card, likes: response.data.likes} : card
            })
            return updatedCards;
          })
        })
      .catch((error) => {
        console.log(error);
      });
    };

  const addBoard = (newBoardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards`, newBoardData)
      .then((response) => {
        const newBoards = [...boards];

        newBoards.push({
          id: response.data.id,
          owner: response.data.owner,
          title: response.data.title,
        });

        setBoards(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards/${currentBoardId}/cards`, newCardData)
      .then((response) => {
        const newCards = [...cards];

        newCards.push({
          id: response.data.id,
          message: response.data.message,
          likes: response.data.likes,
          board: response.data.board
        });

        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeBoard = (id) => {
    setCurrentBoardId(id);
    // console.log(currentBoardId)
    axios.get(`https://m-cubed-api.onrender.com/boards/${currentBoardId}/cards`)
      .then(response => {
        setCards(response.data);
      });
  };

  return (
    <main className='App'>
      <h1>Inspiration Board</h1>
      <BoardList
        boards={boards} changeBoardCallback={changeBoard}
      />
      <NewBoardForm addNewBoardCallback={addBoard} />
      <NewCardForm addCardCallback={addCard} />
      <CardList
        cards={cards}
      />
    </main>
  );
}

export default App;
