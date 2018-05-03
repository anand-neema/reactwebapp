import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';

class App extends Component {

  constructor(){
    super();
    this.setState({
      test:'teast'
    });
  }

  componentWillMount(){
    const url = "https://weathersync.herokuapp.com/ip";
    // Request.get(url).then((response)=>{
    //   const weatherDetailUrl= `https://weathersync.herokuapp.com/weather/${response.body.location.latitude},${response.body.location.longitude}`;
    //   Request.get(weatherDetailUrl).then((response)=>{
    //     console.log(response);
    //   })
    // })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
