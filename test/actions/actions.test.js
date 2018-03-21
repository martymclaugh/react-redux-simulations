import { ADD_USERNAME, addUsername } from '../../src/actions';

test('Add Username has the correct type', () => {
  const action = addUsername();
  expect(action.type).toBe(ADD_USERNAME);
});

test('has the correct payload', () => {
  const action = addUsername('username');
  expect(action.payload).toBe('username');
});
