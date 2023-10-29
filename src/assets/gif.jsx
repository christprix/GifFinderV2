import React, { Component } from "react";

class Gif extends Component {
  handleClick = (event) => {
    this.props.changeGif(this.props.id)
    console.log(this);
  }
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47az90yxswd66ivez836zt8o0fmrq4rzrdix4mwrj7&amp;ep=v1_videos_trending&amp;rid=giphy.gif&amp;ct=v`
    return (
      <img className="gif" src={src} onClick={this.handleClick}></img>
    )
  };
}

export default Gif
