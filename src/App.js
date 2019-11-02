import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Welcome to the College Events Website!</h1>
      </header>
      
      <Footer />  
    </div>
  );
}

export default App;
