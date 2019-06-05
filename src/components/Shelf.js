import React, { Component } from 'react';

export default function Shelf(props) {
  return (
  <div className="shelf">
    {
      Array.from({ length: 25 }).map((ele, index) => {
        return (<Card key={index} id={index}></Card>);
      })
    }
  </div>
  );
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
      beenViewed: false,
    };

  }

  handleClick = (option, e) => {

    if (this.state.id === '') {
      this.setState({
        id: this.props.id,
      })
    }

    if (option === 'add') {
      this.setState({
        mode: 'edit',
      });
    }

    if (option === 'confirm-edit') {
      this.setState({
        mode: 'view',
      });
    }

    if (option === 'cancel-edit') {
      const { brand, style, size, upcId, beenViewed } = this.state;

      if (!brand || !style || !size || !upcId) {
        this.setState({
          mode: 'add',
        });
      } else if(beenViewed) {
        this.setState({
          mode: 'view',
        });
      } else {
        this.setState({
          brand: '',
          style: '',
          size: '',
          upcId: '',
          mode: 'add',
        });
      }
    }

    if (option === 'clear') {
      this.setState({
        brand: '',
        style: '',
        size: '',
        upcId: '',
        mode: 'add',
        beenViewed: false,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      mode: 'view',
      beenViewed: prevState.beenViewed ? prevState.beenViewed : !prevState.beenViewed,
    }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
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
                changeHandler={this.handleChange}
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
  const { submitForm, handleCancel, changeHandler, brand, style, size, upcId } = props;

  return (
    <form id="shoe-form" onSubmit={submitForm}>
      <input 
        className="form-input" 
        type="text" 
        name="brand" 
        onChange={changeHandler}
        value={brand} 
        placeholder="brand" 
      />
      <input 
        className="form-input" 
        type="text" 
        name="style" 
        onChange={changeHandler}
        value={style}
        placeholder="style" 
      />
      <input 
        className="form-input" 
        type="text" 
        name="size" 
        onChange={changeHandler}
        value={size}
        placeholder="size" 
      />
      <input 
        className="form-input" 
        type="text" 
        name="upcId" 
        onChange={changeHandler}
        value={upcId}
        placeholder="upcId" 
      />
      <input 
        id="submit-button" 
        className="form-button" 
        type="submit" 
        name="submit" 
        value="accept" 
      />
      <button
        className="form-button"
        id="cancel-button"
        onClick={handleCancel}
      >cancel</button>
    </form>  
  );
}
