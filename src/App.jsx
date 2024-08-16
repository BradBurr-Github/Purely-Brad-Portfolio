import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
    <Header />
    <Project />
    <AboutMe />
    <Footer />
    </>
  )
}

export default App
