import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../Redux/filtersSlice';
import { nanoid } from 'nanoid';
import { selectStatusFilter } from 'Redux/selectors';
import css from './Filter.module.css';

const filterInputId = nanoid();

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(change(e.currentTarget.value));
  };

  return (
    <div>
      <label htmlFor={filterInputId}> Find contacts: </label>
      <input
        className={css.filterInput}
        id={filterInputId}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
      ></input>
    </div>
  );
};
