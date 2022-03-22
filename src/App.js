import React from 'react'
import './App.css'
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Products from './appProducts';
import Contact from './appContact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component{

  render(){
    return(
      <body>
       <Router>
          <Navbar />
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/contact" element ={<Contact/>} />
          </Routes>
          <Footer/>
       </Router>

      </body>
    )
  };
};

export default App;