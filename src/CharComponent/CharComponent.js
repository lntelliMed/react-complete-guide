import React, {Component} from 'react';

class CharComponent extends Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  render(){
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAling: 'center',
      margin: '160x',
      border: '1px solid black'
    };
    return (
      <div style={style} onClick={this.props.deleteCharHandler}>
        {this.props.enteredChar}
      </div>
    );
  }
}

export default CharComponent;
