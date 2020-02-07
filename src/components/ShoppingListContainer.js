import { connect } from 'react-redux';
import { ListActions } from "../redux/ListActions";
import ShoppingList from "../../../shoppinglist-base/src/components/ShoppingList";

const mapStateToProps = state => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(ListActions.addItem(item)),
    removeItem: (id) => dispatch(ListActions.removeItem(id)),
    removeAllItems: () => dispatch(ListActions.removeAllItems()),
  }
};

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

export default ShoppingListContainer;
