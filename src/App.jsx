import React from "react";
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom"; // Use HashRouter
import Hero from './Components/Hero/Hero';
import Yogohome from './Components/Yogohome/Yogohome';
import Foodhome from "./Components/Foodhome/Foodhome";
import Otherhome from "./Components/Otherhome/Otherhome";
import Abouthome from "./Components/Abouthome/Abouthome";
import Contact from "./Components/Contact/Contact";
import Category from "./Pages/Category";
import ContextProvider from './Context/Context';
import Other from "./Pages/Other";

const App = () => {
  return (
    <ContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <Hero />
              <Yogohome />
              <Foodhome />
              <Otherhome />
              <Abouthome />
            </div>
          } />
          <Route path="/yoga" element={
            <div className="category-page">
              <Hero />
              <Category category="yoga" />
            </div>
          } />
          <Route path="/food" element={
            <div className="category-page">
              <Hero />
              <Category category="food" />
            </div>
          } />
          <Route path="/other" element={
            <div className="category-page">
              <Hero />
              <Other category="other" />
            </div>
          } />
        </Routes>
        <Contact />
      </HashRouter>
    </ContextProvider>
  );
};

export default App;
