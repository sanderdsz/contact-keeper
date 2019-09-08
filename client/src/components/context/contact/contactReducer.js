import {
  ADD_CONTACT,
  REMOVE_ALERT,
  SET_ALERT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_CURRENT,
  DELETE_CONTACT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};
