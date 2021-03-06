import React from 'react';
import InputBox from './inputBox';

const range = function(start, end) {
  const list = [];
  for (let i = start; i < end; i++) {
    list.push(i);
  }
  return list;
};

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const inputBoxes = range(2, 17).map((base) => {
      return (
        <div key={base} style={{ margin: '0.5em' }}>
          <span>Base {base} : </span>
          <InputBox
            base={base}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      );
    });
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {inputBoxes}
      </div>
    );
  }
}

export default BaseConverter;
