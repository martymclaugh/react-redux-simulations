import { ADD_USERNAME, addUsername } from '../../src/actions';

describe('actions', () => {
  it('has the correct type', () => {
    const action = addUsername();
    expect(action.type).to.equal(ADD_USERNAME);
  });

  it('has the correct payload', () => {
    const action = addUsername('username');
    expect(action.payload).to.equal('username');
  });
});
