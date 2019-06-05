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
        mode: 'add',
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
            <div className="shoe-info-container">
              <div className="shoe-info">{brand}</div>
              <div className="shoe-info">{style}</div>
              <div className="shoe-info">{size}</div>
              <div className="shoe-info">{upcId}</div>
              <button 
                id="edit-button"
                className="form-button"
                onClick={(e) => this.handleClick('add', e)}
              >edit</button>
              <button 
                id="remove-button"
                className="form-button"
                onClick={(e) => this.handleClick('clear', e)}
              >remove</button>
            </div>
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
// implement handleChange instead of onSubmit.
// onSubmit can literally just change the mode, handleChange will have already 
// updated the state (which is all you really need)
function ShoeForm(props) {
  const { submitForm, handleCancel, brand, style, size, upcId } = props;
  return (
    <form id="shoe-form" onSubmit={submitForm}>
      <input className="form-input" type="text" name="brand" placeholder="brand" />
      <input className="form-input" type="text" name="style" placeholder="style"/>
      <input className="form-input" type="text" name="size" placeholder="size"/>
      <input className="form-input" type="text" name="upcId" placeholder="upcId"/>
      <input id="submit-button" className="form-button" type="submit" name="submit" value="accept" />
      <button
        className="form-button"
        id="cancel-button"
        onClick={handleCancel}
      >cancel</button>
    </form>  
  );
}
