import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Detail from './Routes/Detail'
import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './Components/utils/global.context'
import './index.css'

function App() {
  return (
    <div className="App ">
      <ContextProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
        <Footer/>
      </ContextProvider>
    </div>
  )
}

export default App
