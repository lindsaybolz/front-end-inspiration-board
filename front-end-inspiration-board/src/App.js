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
  const [currentBoard, setCurrentBoard] = useState(0)
  
  useEffect(() => {
    axios.get('https://m-cubed-api.onrender.com/boards')
      .then(response => {
        setBoards(response.data)
      });
  }, []);

  const addBoard = (newBoardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards`, newBoardData)
      .then((response) => {

        const newBoards = [...boards];
        newBoards.push({
          id: response.data.id,
          owner: response.data.owner,
          title: response.data.title,
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
        newCards.push({
          id: response.data.id,
          likes: response.data.likes,
          message: response.data.message,
          board: response.data.board,
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
