import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import DetailCharacter from './components/DetailCharacter/DetailCharacter'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/detail/:id' element={<DetailCharacter />} />
      </Routes>
    </>
  )
}

export default App
