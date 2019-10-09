import { sum } from '../utils';

describe('Name of the group', () => {
  it('should return 6', () => {
    const result = sum(3, 3);
    expect(result).toEqual(6);
  });
});

describe('Name of the group', () => {
  it('should return 4', () => {
    const result = sum(2, 3);
    expect(result).not.toEqual(1);
  });
});
