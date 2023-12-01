import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from './components/Header.jsx'
import CartIdWrapper from './pages/CartIdWrapper.jsx'
import Footer from './components/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CartIdWrapper />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
     </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

