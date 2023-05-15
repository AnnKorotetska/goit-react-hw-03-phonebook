import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './FilterStyled';

export class Filter extends Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={onChange} value={value} />
      </Label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
