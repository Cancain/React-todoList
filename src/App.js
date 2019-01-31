import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import ListItem from './ListItem/ListItem';

class App extends Component {

  state = {
    text: '',
    listItems: []
  }

  addItemHandler = (text) => {
    if (text !== '') {
      const items = [...this.state.listItems]
      items.push(text);
      this.setState({
        text: '',
        listItems: items
      })
    }
  }

  textChangedHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  removeItemHandler = (index) => {
    const items = [...this.state.listItems]
    items.splice(index, 1);
    this.setState({ listItems: items });
  }

  keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      console.log('keypress');
      this.addItemHandler(this.state.text);
    }

  }

  render() {
    let data = this.state.listItems;
    return (

      <div className="App">

        <Input text={this.state.text}
          changed={this.textChangedHandler}
          clicked={() => this.addItemHandler(this.state.text)}
          keyDown={this.keyDownHandler}
        />
        <ul>
          {data.map((text, index) => <ListItem
            key={index}
            listText={index + 1 + ': ' + text}
            clickRemove={() => this.removeItemHandler(index)}
          />)}
        </ul>

      </div>
    );
  }
}

export default App;
