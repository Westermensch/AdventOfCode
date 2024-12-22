import * as Day3 from "../src/day3"

test("readTestFileIntoString__givenExampleFile__RerturnAsString", ()=>{
    expect(Day3.readTestFileIntoString('./day3/tests/example.txt')).toBe('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))');
})