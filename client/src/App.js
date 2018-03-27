
import React, { Component } from 'react';
import style from './App.scss';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
