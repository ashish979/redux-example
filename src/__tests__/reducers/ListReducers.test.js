import ListReducers from '../../redux/LIstReducers';

describe('list Reducer', () => {
   
  
  it('returns the initial state when an action type is not passed', () => {
    let initialState = {
      items: {}
    }
    const reducer = ListReducers(undefined, {});
    expect(reducer).toEqual(initialState);
  });

    it('should be able to add state when an action type is ADD_ITEM', () => {
      let initialState = {
        items: {}
      }

      let item = {
        id: 1,
        date: new Date(),
        name: 'a',
        description: 'description',
        quantity: 1
      };

      const reducer = ListReducers(initialState, { type : "add_item", item : item});
      let expected = {
        items : { "1": item }
      }
      expect(reducer).toEqual(expected);
    });

    it('should be able to remove state when an action type is REMOVE_ITEM', () => {
      let initialState = {
        items: { "1": {},"2":{}, "3": {}}
      }
      const reducer = ListReducers(initialState, { type : "remove_item", id:2});
      let expected = {
        items: { "1": {},"3": {}}
      }
      expect(reducer).toEqual(expected);
    });

    it('should be able to remove all items when an action type is REMOVE_ALL_ITEMS', () => {
      let initialState = {
        items: { "1": {},"2":{}, "3": {}}
      }
      const reducer = ListReducers(initialState, { type : "remove_all_items"});
      let expected = {
        items: {}
      }
      expect(reducer).toEqual(expected);
    });
  });
