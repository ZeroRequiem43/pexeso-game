import { useState } from 'react'
import { useSelector } from 'react-redux'
import GamePage from './pages/GamePage'
import Settings from './components/game/Settings'
import Win from './components/game/Win'
import Modal from './components/Modal'
import './assets/scss/index.scss'
// import M from 'materialize-css'


export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const isGameWin = useSelector(state => state.board.isGameWin)

  const setGameStart = (value) => setIsGameStarted(value)


  return (
    <div className="App">
      <GamePage isGameStarted={isGameStarted} setGameStart={setGameStart} />
      <Modal header={isGameWin ? 'Ура!' : 'Настройки'}>
        {!isGameWin
          ? <Settings />
          : <Win />}
      </Modal>
    </div>
  );
}
