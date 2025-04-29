import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Blog from './pages/Blog.jsx';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/proyectos' element={<Proyectos />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
