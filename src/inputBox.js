import React from 'react';

const range = function(start, end) {
  const list = [];
  for (let i = start; i < end; i++) {
    list.push(i);
  }
  return list;
};

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  isValid(input) {
    const { base } = this.props;
    const validNumbers = range(0, 10)
      .map((i) => `${i}`)
      .slice(0, base);
    const validChars = ['a', 'b', 'c', 'd', 'e', 'f'].slice(0, base - 10);
    const validCombination = validNumbers.concat(validChars);
    const charsInInput = input.toLowerCase().split('');
    return charsInInput.every((char) => validCombination.includes(char));
  }

  handleChange(event) {
    const value = event.target.value;
    if (this.isValid(value)) {
      this.props.onChange(parseInt(value, this.props.base));
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

export { InputBox, range };
