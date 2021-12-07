import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/scss/index.scss'
import Header from './components/Header'
import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
// import M from 'materialize-css'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes >
      </Router>
    </div>
  );
}
