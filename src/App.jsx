import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <ContextProvider> {/* Wrap everything inside context */}
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <div className="home-page">
              <Hero />
              <Yogohome />
              <Foodhome />
              <Otherhome />
              <Abouthome />
            </div>
          } />

          {/* Category Routes */}
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
              <Hero /> *
              <Other category="other" />
            </div>
          } />
        </Routes>
        <Contact/>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;