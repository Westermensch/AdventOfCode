import * as Input from "../src/inputParser"

test('parseInputFile should return the content of the exapmle.txt as string', () => {
    const [firstNumbers, secondNumbers] = Input.parseInputFile('./tests/example.txt');
    expect(firstNumbers).toEqual([3, 4, 2, 1, 3, 3]);
    expect(secondNumbers).toEqual([4, 3, 5, 3, 9, 3]);
});

test('orderNumberAscending should return the number array sorted ascending', () => {
    const testArray: number[] = [4, 3, 5, 3, 9, 3];
    const sorted: number[] = Input.orderNumberAscending(testArray);
    expect(sorted).toEqual([3, 3, 3, 4, 5, 9]);
});

test('orderNumberAscending should return the number array sorted ascending', () => {
    const testArray: number[] = [3, 4, 2, 1, 3, 3];
    const sorted: number[] = Input.orderNumberAscending(testArray);
    expect(sorted).toEqual([1, 2, 3, 3, 3, 4]);
});

test('determineDifference should return added value of the abs differences of the array values', () => {
    const testinput1: number[] = [1, 2, 3, 3, 3, 4];
    const testinput2: number[] =  [3, 3, 3, 4, 5, 9];
    const result: number = Input.determineDifference(testinput1, testinput2);
    expect(result).toEqual(11);
});

test('integration should return added value of parsed input file', () => {
    const result: number = Input.integration('./tests/example.txt');
    expect(result).toEqual(11);
});

test('Too lazy to write a main function', () => {
    const result: number = Input.integration('./tests/real.txt');
    expect(result).toEqual(1938424);
});

test('findAmount should return 3 if the number is in the array three times', () => {
    const testArray: number[] = [1, 2, 3, 2, 2, 6];
    expect(Input.getAmount(testArray, 2)).toEqual(3)
})

test('findAmount should return 0 if the number is not in the array', () => {
    const testArray: number[] = [1, 2, 3, 2, 2, 6];
    expect(Input.getAmount(testArray, 22)).toEqual(0)
})

test('integrationSecondStar is run with example text file, should return 31', () => {
    expect(Input.integrationSecondStar('./tests/example.txt')).toEqual(31)
})

test('integrationSecondStar this is how we do this here hahah', () => {
    expect(Input.integrationSecondStar('./tests/real.txt')).toEqual(22014209)
})