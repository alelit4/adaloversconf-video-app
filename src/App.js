import React from 'react';
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header title="super❤️favs of AdaLoversConf 2019"></Header>
        <List></List>
        <Footer></Footer>
    </div>
  );
}

export default App;
