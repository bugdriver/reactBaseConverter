import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const decimalValue = value ? parseInt(value, this.props.base) : 0;
    if (!isNaN(decimalValue)) {
      this.props.onChange(decimalValue);
    }
  }

  render() {
    const { value, base } = this.props;
    const convertedValue = parseInt(value).toString(base);
    return (
      <input type="text" value={convertedValue} onChange={this.handleChange} />
    );
  }
}

export default InputBox;
