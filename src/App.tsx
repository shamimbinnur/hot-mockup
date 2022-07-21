import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hot from './components/Hot';
import MyVotes from './components/MyVotes';
import ThisWeek from './components/ThisWeek';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Hot/>
      <Routes>
        <Route path="/" element={<ThisWeek/>} />
        <Route path="/votes" element={<MyVotes/>} />
      </Routes>
    </>
  );
}

export default App;
