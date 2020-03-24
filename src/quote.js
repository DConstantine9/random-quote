import React from 'react';
import './App.css';

export default class Quote extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      quote: null,
      author: null,
    }

    this.getRandomInt = this.getRandomInt.bind(this)
    this.quoteRandomizer = this.quoteRandomizer.bind(this)
  } 

  quoteRandomizer() {
    let item = this.getRandomInt(0, this.state.quotes.length - 1)
    let rand = this.state.quotes[item]

     this.setState({
      quote: rand.quote,
      author: rand.author
    })   
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(d => this.setState({quotes: d}))
  }

  render() {
    return (
      <div id="quote-box"> 
        <div id="text">{this.state.quote}</div>
        <div className="buttons">
          <div id="author">- {this.state.author}</div>
          <button onClick={this.quoteRandomizer} id="new-quote">new quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote}`}><i className="fab fa-twitter-square"></i></a>
        </div>
      </div>
    )
  }
}