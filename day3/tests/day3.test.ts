import * as Day3 from "../src/day3"

// Star 1

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

test("calculateResult__givenExtractedNumbers__Return161", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example.txt');
    const commandArray = Day3.extractMulSteps(input);
    let numberArray: number[][] = [];
    if(commandArray) numberArray = Day3.extractNumbers(commandArray);
    expect(Day3.calculateResult(numberArray)).toBe(161);
})

test("calculateResult__givenRealNumbers__Return161", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/real.txt');
    const commandArray = Day3.extractMulSteps(input);
    let numberArray: number[][] = [];
    if(commandArray) numberArray = Day3.extractNumbers(commandArray);
    expect(Day3.calculateResult(numberArray)).toBe(189600467);
})

// Star 2

test("extractMulStepsAndCommands__givenExampleString__RerturnArrayContainingAllMultiplyingSteps", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example2.txt');
    expect(Day3.extractMulStepsAndCommands(input)).toEqual(['mul(2,4)', `don't()`, 'mul(5,5)', 'mul(11,8)', `do()`, 'mul(8,5)']);
})

test("followDoCommands__givenParsedArray__RerturnArrayContainingAllMultiplyingStepsThatAreAllowed", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example2.txt');
    const commandArray = Day3.extractMulStepsAndCommands(input);
    if(commandArray) expect(Day3.followDoCommands(commandArray)).toEqual(['mul(2,4)', 'mul(8,5)']);
})

test("calculateResult__givenExample2Numbers__Return48", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/example2.txt');
    const commandArray = Day3.extractMulStepsAndCommands(input);
    let numberArray: number[][] = [];
    let reducedArray: string[] = [];
    if (commandArray) reducedArray = Day3.followDoCommands(commandArray);
    if(reducedArray) numberArray = Day3.extractNumbers(reducedArray);
    expect(Day3.calculateResult(numberArray)).toBe(48);
})

test("calculateResult__givenRealNumbers__ReturnRealResult", ()=>{
    const input = Day3.readTestFileIntoString('./day3/tests/real.txt');
    const commandArray = Day3.extractMulStepsAndCommands(input);
    let numberArray: number[][] = [];
    let reducedArray: string[] = [];
    if (commandArray) reducedArray = Day3.followDoCommands(commandArray);
    if(reducedArray) numberArray = Day3.extractNumbers(reducedArray);
    expect(Day3.calculateResult(numberArray)).toBe(107069718);
})