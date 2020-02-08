import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListItem from '../../components/ListItem';

Enzyme.configure({ adapter: new Adapter() });

//Use array destructurig to create mock functions.
let [removeListItem] = new Array(1).fill(jest.fn());

function shallowSetup() {
    const props = {
        item: {
            id: 1,
            date: new Date(),
            name: 'a',
            description: 'some description',
            quantity: 10
          },
        key: 1,
        removeListItem
    };
    // wrapper instance around rendered output
    // const enzymeWrapper = shallow(<ListItem {...props} />);
    const enzymeWrapper = mount(<ListItem {...props} />);
    return {
        props,
        enzymeWrapper
      };
}

describe('Shallow rendered ListItem', () => {
    it('should render ListItem', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
 
      expect(enzymeWrapper.find('.float-left').text()).toBe(props.item.name);
      expect(enzymeWrapper.find('button.pull-right.btn.btn-danger').text()).toBe('Remove');
      expect(enzymeWrapper.containsMatchingElement(<button type="submit" className="pull-right btn btn-danger">Remove</button>)).toBe(true);

      enzymeWrapper.find('[type="submit"]').simulate('submit', { preventDefault () {} })
      expect(props.removeListItem.mock.calls.length).toBe(1)
    });
  });
