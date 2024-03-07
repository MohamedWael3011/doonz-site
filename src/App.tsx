import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import NavBar from './components/nav-bar/NavBar'
import BackgroundImage from './assets/Background.png';


function App() {

  return (
        <main className='min-h-screen bg-cover bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </main>
  )
}

export default App
