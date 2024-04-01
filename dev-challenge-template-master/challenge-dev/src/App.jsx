import { Route, Routes } from 'react-router-dom'
import CharacterList from './components/CharacterList.jsx'
import DetailCharacter from './components/DetailCharacter/DetailCharacter'
import GlobalStyles from './GlobalStyles.js'

function App () {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/detail/:id' element={<DetailCharacter />} />
      </Routes>
    </>
  )
}

export default App
