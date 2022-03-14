import './App.css';
import { useState, useEffect, useRef } from 'react';
import CommandName from './components/CommandName'
import Wrapper from "./components/Wrapper";

function App() {
  const baseString = "НоваяВестляндия Бромвич Альбиономания";
  const baseStringArray = baseString.split(' ');

  return (
    <Wrapper array={baseStringArray} />
  );
}

export default App;
