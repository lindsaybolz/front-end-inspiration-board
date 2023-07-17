import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
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
  const [boards, setBoards] = useState(boardData);
  const [cards, setCards] = useState([])
  const [currentBoard, setCurrentBoard] = useState(1)
  
  useEffect(() => {
    axios.get('https://m-cubed-api.onrender.com/boards')
      .then(response => {
        setBoards(response.data)
      });
    axios.get(`https://m-cubed-api.onrender.com/boards/${ currentBoard }/cards`)
      .then(response =>{
        setCards(response.data);
      });
  }, []);

  const addBoard = (newBoardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards`, newBoardData)
      .then((response) => {

        const newBoards = [...boards];
        const nextId = Math.max(...newBoards.map(board=>board.id)) + 1;
        newBoards.push({
          id: nextId,
          owner: newBoardData.owner,
          title: newBoardData.title,
        })
        setBoards(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards/${currentBoard}/cards`, newCardData)
      .then((response) => {
        const newCards = [...cards];
        const nextId = Math.max(...newCards.map(card=>card.id)) + 1;
        const board = boards.filter(board => board.id === currentBoard);
        const boardTitle = board[0].title;
        newCards.push({
          id: nextId,
          likes: 0,
          message: newCardData.message,
          board: boardTitle,
        })
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeCard = (id) => {
    axios.delete(`https://m-cubed-api.onrender.com/cards/${id}`)
    .then( response => {
      setCards(prevCards => {
        const updatedCards = prevCards.filter(card => card.id !== id);
        return updatedCards
      })  
    })
    .catch(error => {
      console.log(error.response.data)
    })
  };

  const addLike = (id) => {
    axios.patch(`https://m-cubed-api.onrender.com/cards/${id}`)
    .then( response => {
      setCards(prevCards => {
        const updatedCards = prevCards.map(card => {
          return card.id === id ? {...card, likes: card.likes + 1} : card;
        })
        return updatedCards;
      })
    })
    .catch(error => {
      console.log(error.response.data)
    })

  };

  const changeBoard = (id) => {
    axios.get(`https://m-cubed-api.onrender.com/boards/${id}/cards`)
    .then(response =>{
      setCurrentBoard(id)
      setCards(response.data);
    });
    console.log(currentBoard)
    console.log(cards)
  };

  return (
    <main className='App'>
      <h1>Magical Mystical Mycelium</h1>
      <BoardList boards={boards} changeBoardCallBack={ changeBoard }/>
      <CardList cards={cards} removeCard={ removeCard } addLike={addLike}/>
      <NewBoardForm addNewBoardCallback={ addBoard } />
      <NewCardForm addNewCardCallback={addCard} />
    </main>
  );
}

export default App;
