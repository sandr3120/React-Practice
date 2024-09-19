import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adopt from './pages/Adopt'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/adopt' element={<Adopt/>}></Route>
                    <Route path='/community' element={<Community/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App