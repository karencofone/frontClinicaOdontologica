import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './index.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route path='/detail/:id' element={<Detail/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/favs' element={<Favs/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
