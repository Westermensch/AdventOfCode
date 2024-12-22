import * as Day3 from "../src/day3"

test("readTestFileIntoString__givenExampleFile__RerturnAsString", ()=>{
    expect(Day3.readTestFileIntoString('./day3/tests/example.txt')).toBe('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))');
})

test("extractMulSteps__givenExampleString__RerturnArrayContainingAllMultiplyingSteps", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example.txt');
    expect(Day3.extractMulSteps(input)).toEqual(['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']);
})

test("ëxtractNumbers__givenExtractedMulSteps__ReturnArrayOfNumberArrays", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example.txt');
    const commandArray = Day3.extractMulSteps(input);
    if(commandArray) expect(Day3.extractNumbers(commandArray)).toEqual([[2,4], [5,5], [11,8], [8,5]]);
})