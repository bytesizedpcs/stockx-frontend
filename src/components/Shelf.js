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

  handleClick = (option, e) => {
    if (option === 'add') {
      console.log('Hello from add!');
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
      <div>
        {
          cards.map((ele, index) => {
            return ele.map((e, i) => {
              return (
                <Card handleClick={this.handleClick}></Card>
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
    const { handleClick } = this.props;
    return (
      <div>
        <button onClick={(e) => handleClick('add', e)}></button>
        <button onClick={(e) => handleClick('edit', e)}></button>
        <button onClick={(e) => handleClick('clear', e)}></button>
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
    );
  }
}

class EditMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    );
  }
}

class RemoveMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    );
  }
}


