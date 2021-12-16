import { useState } from 'react'
import { useSelector } from 'react-redux'
import GamePage from './pages/GamePage'
import Settings from './components/game/Settings'
import Win from './components/game/Win'
import Modal from './components/Modal'
import './App.css'
import './assets/scss/index.scss'
// import M from 'materialize-css'


export default function App() {
  const [modalActive, setModalActive] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const isGameWin = useSelector(state => state.board.isGameWin)

  const setModal = (value) => setModalActive(value)
  const setGameStart = (value) => setIsGameStarted(value)


  return (
    <div className="App">
      <GamePage setModal={setModal} isGameStarted={isGameStarted} setGameStart={setGameStart} />
      <Modal header={isGameWin ? 'Ура!' : 'Настройки'} modalActive={modalActive} setModal={setModal}>
        {!isGameWin
          ? <Settings />
          : <Win setModal={setModal} />}
      </Modal>
    </div>
  );
}
