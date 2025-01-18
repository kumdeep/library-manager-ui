import { useState } from 'react'
import BookDetailsComponent from './book/BookDetailsComponent'
import "./App.css";
import BookAddFormComponent from './book/BookAddFormComponent';

function App() {
  return <div id="applicationContainer">
    <BookAddFormComponent/>
    <BookDetailsComponent/>
  </div>
}

export default App
