import React, { Component } from "react";
import { Triple } from "react-preloading-component";
import { toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import StarwarsCharsList from "./components/StarwarsCharsList";

toast.configure();
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      error: false,
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
        this.setState({ error: true });
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
    console.log(this.state.error);
    if (this.state.error === true) {
      return toast.error("Error Loading Characters.");
    }
    return (
      <div className="preloader">
        <Triple color="#f26419" size={80} />
      </div>
    );
  }
}

export default App;
