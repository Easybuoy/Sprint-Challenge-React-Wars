import React, { Component } from "react";
import { Triple } from "react-preloading-component";

import "./App.css";

import StarwarsCharsList from "./components/StarwarsCharsList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    if (this.state.starwarsChars.length > 0) {
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <StarwarsCharsList
            starwarsChars={this.state.starwarsChars}
            previous={this.state.previous}
            next={this.state.next}
            getCharacters={this.getCharacters}
          />
        </div>
      );
    }
    return (
      <div className="preloader">
        <Triple color="green" size={80} />
      </div>
    );
  }
}

export default App;
