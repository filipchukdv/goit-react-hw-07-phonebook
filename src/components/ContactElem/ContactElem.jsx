import PropTypes from 'prop-types';
import { Button, Item } from './ContactElem.styled';
import { useDispatch } from 'react-redux/es/exports';
import { deleteById } from 'store/actions';

const ContactElem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{`${name} : ${number}`}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteById(id));
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactElem;
