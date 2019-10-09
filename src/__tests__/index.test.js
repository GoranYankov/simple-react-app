import { sum } from '../utils';

describe('Name of the group', () => {
  it('should return 4', () => {
    const result = sum(23, 3);
    expect(result).toEqual(5);
  });
});

describe('Name of the group', () => {
  it('should return 4', () => {
    const result = sum(2, 3);
    expect(result).not.toEqual(1);
  });
});
