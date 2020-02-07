import React, { Component } from 'react';
import List from './List';
import AddListItem from './AddListItem';

class ShoppingList extends Component {
  
  render() {
    const { items, removeItem, removeAllItems, addItem } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List
              items={items}
              removeListItem={removeItem}
              removeAllListItems={removeAllItems}
            />

          </div>
          <div className="col-sm-6">

            <AddListItem addListItem={ addItem } />

          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;