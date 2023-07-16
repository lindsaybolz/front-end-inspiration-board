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
        axios.get(`https://m-cubed-api.onrender.com/boards`)
        .then(response =>{
          setBoards(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardData) => {
    axios
      .post(`https://m-cubed-api.onrender.com/boards/${currentBoard}/cards`, newCardData)
      .then((response) => {
        axios.get(`https://m-cubed-api.onrender.com/boards/${currentBoard}/cards`)
        .then(response =>{
          setCards(response.data);
        });
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
      axios.get(`https://m-cubed-api.onrender.com/boards/${currentBoard}/cards`)
      .then(response =>{
        setCards(response.data);
      });
    })
    .catch(error => {
      console.log(error.response.data)
    })

  };

  // once we code the board selector list so that people can select the board
  // it will call this changeBoard function with the approproate board_id
  const changeBoard = (id) => {
    // console.log(currentBoard)
    setCurrentBoard(id)
    axios.get(`https://m-cubed-api.onrender.com/boards/${currentBoard}/cards`)
    .then(response =>{
      setCards(response.data);
    });

  };
  // console.log(cards)
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
