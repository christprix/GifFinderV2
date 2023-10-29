import { useState } from 'react'
import viteLogo from '/vite.svg'
import React, { Component } from "react";
import SearchBar from "./assets/searchBar";
import Gif from "./assets/gif.jsx";
import GifList from "./assets/gif-list.jsx";
import giphy from 'giphy-api';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'iFU36VwXUd2O43gdcr'
    }

  }

  changeGif = (gif) => {
    this.setState({
      selectedGifId: gif
    });
  }
  search = (query) => {
    giphy(import.meta.env.VITE_KEY).search({
      q: query,
      rating: 'g',
      limit: 15
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList changeGif={this.changeGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App
