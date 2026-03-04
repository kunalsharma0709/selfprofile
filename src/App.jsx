import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PROFILECARD } from './components/Profile'
import { HORIZONTALNAVBAR } from './components/Horizontal'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { HOME } from './components/Home'
import { PROJECTS } from './components/Projects'
import {TOOLS}  from './components/Tools'
import { LANDING } from './components/Landing'
import { Footer } from './components/Footer'
function App() {
    return(
    <div>
        <BrowserRouter>
        <HORIZONTALNAVBAR></HORIZONTALNAVBAR>
        <Routes>
            <Route path="/lolla" element={<PROFILECARD></PROFILECARD>}></Route>
            <Route path='/' element={<LANDING></LANDING>}></Route>
            <Route path='/Home' element={<HOME></HOME>}></Route>
            <Route path ="/Tools" element={<TOOLS></TOOLS>}></Route>
            <Route path="/Projects" element={<PROJECTS></PROJECTS>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
    )
} 

export default App 
