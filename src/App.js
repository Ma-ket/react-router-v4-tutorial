import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Friends from './routes/Friends';
import NoMatch from './routes/NoMatch';

const App = () => (
  <BrowserRouter>
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
        </ul>

        <hr />

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/friends/*" element={ <Friends /> } />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  </BrowserRouter>
);

export default App;
