import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import GamePage from './pages/GamePage'
import Settings from './components/game/Settings'
import Win from './components/game/Win'
import Modal from './components/Modal'
import './App.css'
import './assets/scss/index.scss'
// import M from 'materialize-css'


export default function App() {
  const [modalActive, setModalActive] = useState(false)
  const isGameWin = useSelector(state => state.board.isGameWin)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage setModalActive={setModalActive} />} />
        </Routes >
        <Modal header={isGameWin ? 'Ура!' : 'Настройки'} modalActive={modalActive} setModalActive={setModalActive}>
          {!isGameWin
            ? <Settings />
            : <Win />}
        </Modal>
      </Router>
    </div>
  );
}
