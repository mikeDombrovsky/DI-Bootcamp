import react, { Component } from 'react';
import quotes from './quotes.json'
import Quote from './Components/Quote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      rand: 0,
      color: this.randomHsl(),
      bg_color: this.randomHsl(),
      bg_color_card: this.randomHsl(),
      bg_color_btn: this.randomHsl()
    }
    this.setNewQuote();
  }

  setNewQuote = () => {
    let rand = Math.floor(Math.random() * quotes.length - 1);
    while (rand === this.state.rand) {
      rand = Math.floor(Math.random() * quotes.length - 1);
    }

    const { quote, author } = quotes[rand];
    console.log(quote, author);
    this.setState({
      quote,
      author,
      rand,
      color: this.randomHsl(),
      bg_color: this.randomHsl(),
      bg_color_card: this.randomHsl(),
      bg_color_btn: this.randomHsl(),
    });
  }

  randomHsl = () => {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: `${this.state.bg_color}`,
          color: `${this.state.color}`
        }}
      >
        <Quote
          quote={this.state.quote}
          author={this.state.author}
          setNewQuote={this.setNewQuote}
          color={this.state.color}
          bg_color_card={this.state.bg_color_card}
          bg_color_btn={this.state.bg_color_btn}
        />
      </ div>
    );
  }
}

export default App;
