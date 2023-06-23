import PropTypes from 'prop-types';
import { Button, Item } from './ContactElem.styled';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContactsThunk, getContactsThunk } from 'redux/thunks';

const ContactElem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{`${name} : ${number}`}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContactsThunk(id))
            .unwrap()
            .then(() => dispatch(getContactsThunk()));
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
