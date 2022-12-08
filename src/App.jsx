import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Detail from './Routes/Detail'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { ContextGlobal,  initialState, useContextGlobal } from './Components/utils/global.context'


function App() {
   const {theme, setTheme} = useContextGlobal();
   const handleTheme = () =>{
     setTheme((curr) => (curr === initialState.themes.light ? initialState.themes.dark : initialState.themes.light ))}
  return (
    <div className={"App " + theme.className}>
    <ContextGlobal.Provider value={{theme, handleTheme}}>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
     <Route path='/:id' element={<Detail/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/favs' element={<Favs/>}/>
    </Routes>
    <Footer/>
    </ContextGlobal.Provider>
    </div>
  )
}

export default App
