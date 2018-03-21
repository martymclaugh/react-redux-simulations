import React from 'react';
import ChatRoom from '../../src/components/chat_room';

import { createStore } from 'redux';
import reducers from '../../src/reducers';
let state = {};

describe('ChatRoom', () => {
  describe('shallow component', () => {
    let component;

    beforeEach(() => {
      component = shallow(<ChatRoom store={createStore(reducers, state)}/>);
    });

    it('has the correct class', () => {
      expect(component.find('.chat-room')).to.exist;
    });

    it('has the chat container', () => {
      expect(component.find('.chat-container')).to.exist;
    });

  });


  describe('shows appropriate chat pane', () => {
    let component;

    it('has the correct class', () => {
      state = { selectedChat: false}
      component = mount(<ChatRoom store={createStore(reducers, state)}/>);
      expect(component.find('.empty-chat')).to.exist;
    });


  });
});
