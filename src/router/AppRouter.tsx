import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Details from '../pages/Details'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Services from '../pages/Services'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter