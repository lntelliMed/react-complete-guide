import React, {Component} from 'react';

class ValidationComponent extends Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }


  render () {
    const textLength = this.props.enteredTextLength;
    let validationMessage = '';
    if(textLength < 5) {
      validationMessage = 'Text too short!';
    } else if (textLength > 5) {
      validationMessage = 'Text too long!';
    }
    return (
      <p>
        {validationMessage}
      </p>
    );
  }
}

export default ValidationComponent;
