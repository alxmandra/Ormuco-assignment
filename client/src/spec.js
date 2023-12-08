const testVectors = require('./firstTwoProblems');
const compareStrings = require('./firstTwoProblems').compareStrings;
describe('My Test Suite', () => {
    it('test vectors', () => {
      expect(testVectors([1,5], [1,8])).toEqual('overlap');
      expect(testVectors([1,8], [3,7])).toEqual('overlap');
      expect(testVectors([10,4], [3,7])).toEqual('overlap');
      expect(testVectors([10,7], [3,5])).toEqual('no overlap');
      expect(testVectors([10,], [3,5])).toEqual('no overlap');
      expect(testVectors([], [3,5])).toEqual('no overlap');
      expect(testVectors(null, [3,5])).toEqual("TypeError: Cannot read properties of null (reading '0')");
    });
  });

  describe('My Test Suite', () => {
    it('test strings', () => {
      expect(compareStrings('1.2', '2.1')).toEqual('Less than the other');
      expect(compareStrings(0, '2.1')).toEqual('Less than the other');
      expect(compareStrings(0, .1)).toEqual('Less than the other');
      expect(compareStrings(5, .1)).toEqual('Greater');
      expect(compareStrings(5, '5')).toEqual('Equal');
      expect(compareStrings('qwe', '5')).toEqual('Greater');
      expect(compareStrings('qwe', 'qwe')).toEqual('Equal');
      expect(compareStrings(null, 'qwe')).toEqual('Not comparable');
    });
  });