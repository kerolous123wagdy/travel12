// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<Navbar />} />
//         <Route path="/" element={<Main />} />
//         <Route path="/" element={<Footer />} />
//       </Routes>
//     </Router>
//   )
// }

const App = () => {
  return(
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}
export default App