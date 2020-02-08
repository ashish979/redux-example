import configureMockStore from 'redux-mock-store';
import { ListActions } from '../../redux/ListActions';
// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});
describe('action creators', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  it('creates ADD_ITEM when adding a item was successful', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    const item = {
        id: 1,
        date: new Date(),
        name: '',
        description: '',
        quantity: 1,
      };

    const expected = [ 
        { type: 'add_item',
          item:{...item } 
        } ];
    
    store.dispatch(ListActions.addItem(item));
    // expect(store.getActions()).toMatchSnapshot();
    // console.log(store.getActions());
    expect(store.getActions()).toEqual(expected);
  });
});