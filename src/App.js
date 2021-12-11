import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
import { useState } from 'react'
import { Settings } from './components/game/Settings'
import Modal from './components/Modal'
import './App.css'
import './assets/scss/index.scss'
// import M from 'materialize-css'


export default function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage setModalActive={setModalActive} />} />
        </Routes >
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <Settings setModalActive={setModalActive} />
        </Modal>
      </Router>
    </div>
  );
}
