import React from 'react';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const value = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();
  const onChange = e =>
    dispatch(phoneBookActions.changeFilter(e.currentTarget.value));
  return (
    <label>
      Фильтр контактов
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
