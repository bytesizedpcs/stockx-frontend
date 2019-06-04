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

    // add, edit
    this.state = {
      id: '',
      brand: '',
      style: '',
      size: '',
      upcId: '',
      mode: 'add',
    };

  }

  handleClick = (option, e) => {

    if (this.state.id === '') {
      this.setState({
        id: this.props.id,
      }, () => console.log(this.state.id))
    }

    if (option === 'add') {
      this.setState({
        mode: 'edit',
      }, () => console.log(this.state.mode));
    }

    if (option === 'confirm-edit') {
      this.setState({
        mode: 'view',
      });
    }

    if (option === 'cancel-edit') {
      this.setState({
        mode: 'view',
      });
    }

    if (option === 'clear') {
      this.setState({
        brand: '',
        style: '',
        size: '',
        upcId: '',
        mode: 'add',
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('target', e.target.brand.value);

    this.setState({
      brand: e.target.brand.value,
      style: e.target.style.value,
      size: e.target.size.value,
      upcId: e.target.upcId.value,
      mode: 'view',
    }, () => console.log('state set by submit'));
  }

  // edit button might need to be a form confirm button
  render() {
  const { brand, style, size, upcId, mode } = this.state;

    return (
      <div className="card">
        {
          mode === 'edit' ? (
            <>
              <ShoeForm
                submitForm={(e) => this.handleSubmit(e)}
                handleCancel={(e) => this.handleClick('cancel-edit', e)}
                brand={brand}
                style={style}
                size={size}
                upcId={upcId}
              ></ShoeForm>
            </>
          ) : mode === 'view' ? (
            <>
              <StateList
                brand={brand}
                style={style}
                size={size}
                upcId={upcId}
              ></StateList>
              <button 
                id="button-cancel"
                onClick={(e) => this.handleClick('add', e)}
              >edit</button>
              <button 
                id="button-cancel"
                onClick={(e) => this.handleClick('clear', e)}
              >remove</button>
            </>
          ) : (
            <button 
              id="button-add"
              onClick={(e) => this.handleClick('add', e)}
            >+</button>
          )
        }
      </div>
    );
  }
}

// make form show parent state
function ShoeForm(props) {
  const { submitForm, handleCancel, brand, style, size, upcId } = props;
  return (
    <form id="shoe-form" onSubmit={submitForm}>
      <label>
        Brand:
        <input type="text" name="brand" />
      </label>
      <label>
        Style:
        <input type="text" name="style" />
      </label>
      <label>
        Size:
        <input type="text" name="size" />
      </label>
      <label>
        UPC ID:
        <input type="text" name="upcId" />
      </label>
      <input type="submit" name="submit" value="accept" />
      <button
        onClick={handleCancel}
      >cancel</button>
    </form>  
  );
}

function StateList(props) {
  const { brand, style, size, upcId } = props;

  return (
    <ul>
      <li>{brand}</li>
      <li>{style}</li>
      <li>{size}</li>
      <li>{upcId}</li>
    </ul>
  );
}
