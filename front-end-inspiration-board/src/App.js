import logo from './logo.svg';
import './App.css';

function App() {
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
