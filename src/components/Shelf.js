import React, { Component } from 'react';

export default class Shelf extends Component {
  constructor() {
    super();

    /**
      x x x x x
      x x x x x
      x x x x x
      x x x x x
      x x x x x
    */
    this.state = {
      cards: 
      [
        [{}, {}, {}, {}, {},],
        [{}, {}, {}, {}, {},],
        [{}, {}, {}, {}, {},],
        [{}, {}, {}, {}, {},],
        [{}, {}, {}, {}, {},],
      ],
    }
  }

  handleClick = (option, cardNumber, e) => {
    if (option === 'add') {
      console.log('Hello from add!');
      console.log('Card number:', cardNumber);
    }
    if (option === 'edit') {
      console.log('Hello from edit!');
    }
    if (option === 'clear') {
      console.log('Hello from clear!');
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="shelf">
        {
          cards.map((ele, index) => {
            return ele.map((e, i) => {
              return (
                <Card 
                  cardNumber={{index, i}}
                  handleClick={this.handleClick}>
                </Card>
              );
            });
          })
        }
      </div>
    );
  }
}


class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleClick, cardNumber } = this.props;
    return (
      <div className="card">
        <button 
          id="button-add"
          onClick={(e) => handleClick('add', cardNumber, e)}
        ></button>
        <button 
          id="button-edit"
          onClick={(e) => handleClick('edit', cardNumber, e)}
        ></button>
        <button 
          id="button-clear"
          onClick={(e) => handleClick('clear', cardNumber, e)}
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


