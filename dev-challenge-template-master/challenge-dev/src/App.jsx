import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import DetailCard from './components/DetailCard'
import Nav from './components/Nav'

function App () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/detail/:id' element={<DetailCard />} />
      </Routes>
    </>
  )
}

export default App
