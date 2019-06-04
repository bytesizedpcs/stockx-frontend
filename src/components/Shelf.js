import React, { Component } from 'react';

export default class Shelf extends Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div className="shelf">
        {
          Array.from({ length: 25 }).map((ele, index) => {
            return (<Card id={index}></Card>);
          })
        }
      </div>
    );
  }
}


class Card extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      brand: '',
      style: '',
      size: '',
      upcId: '',
    };

  }

  handleClick = (option, e) => {

    this.setState({
      id: this.props.id,
    }, () => console.log(this.state.id))

    if (option === 'add') {
    }
    if (option === 'edit') {
      console.log('Hello from edit!');
    }
    if (option === 'clear') {
      console.log('Hello from clear!');
    }
  }

  render() {
  const { brand, style, size, upcId } = this.state;
    return (
      <div className="card">
        <ul>
          <li>{brand}</li>
          <li>{style}</li>
          <li>{size}</li>
          <li>{upcId}</li>
        </ul>
        <button 
          id="button-add"
          onClick={(e) => this.handleClick('add', e)}
        ></button>
        <button 
          id="button-edit"
          onClick={(e) => this.handleClick('edit', e)}
        ></button>
        <button 
          id="button-clear"
          onClick={(e) => this.handleClick('clear', e)}
        ></button>
      </div>
    );
  }
}

class OptionsMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="options-menu" className="menu">
      </div>
    );
  }
}

// EditMenu will be used twice, in edit and add
// it will just read in from state.
// If nothing is there already it will "add"
// if something is there it will "edit"
class EditMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="edit-menu" className="menu">
      </div>
    );
  }
}

class RemoveMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="remove-menu" className="menu">
      </div>
    );
  }
}


