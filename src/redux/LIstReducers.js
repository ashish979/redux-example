import { ADD_ITEM, REMOVE_ALL_ITEMS, REMOVE_ITEM } from './ListActions'

let initialState = {
  items: {}
};

const ListReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      let itemsCopy = {...state.items};
      itemsCopy[action.item.id] = action.item;
      return { items: itemsCopy };
    case REMOVE_ITEM:
      let itemsDup = {...state.items};
      delete itemsDup[action.id];
      return { items: itemsDup };
    case REMOVE_ALL_ITEMS:
      return {
        items: {}
      };
    default:
      return state;
  }
};

export default ListReducer;