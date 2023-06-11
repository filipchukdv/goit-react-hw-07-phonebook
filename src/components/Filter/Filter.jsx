import { Input, Title } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { filterValue } from 'store/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input type="text" name="filter" onInput={handleChange} value={filter} />
    </>
  );
};

export default Filter;
