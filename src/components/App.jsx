import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/blogs/:id' element={<BlogDetails />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
