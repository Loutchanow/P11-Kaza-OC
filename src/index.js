import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from './components/Header.jsx'
import CartId from './components/CartId.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<CartId />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

