import React from 'react';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { connect } from 'react-redux';

const Filter = ({ value, onChange }) => (
  <label>
    Фильтр контактов
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phoneBookActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
