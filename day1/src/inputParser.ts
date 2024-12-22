import { isUtf8 } from 'buffer';
import * as fs from 'fs'
import { number } from 'yargs';

export const parseInputFile = (filePath: string): [number[], number[]] => {
    const buffer: string = fs.readFileSync(filePath, 'utf-8');
    const lines: string[] = buffer.split('\n');

    const firstNumbers: number[] = [];
    const secondNumbers: number[] = [];

    lines.forEach(line => {
        const [first, second] = line.split('   ').map(Number);
        if (!isNaN(first) && !isNaN(second)) { firstNumbers.push(first); secondNumbers.push(second); }
    });
    return [firstNumbers, secondNumbers];
}

export const orderNumberAscending = (array: number[]): number[] => {
    return array.sort((a, b) => a - b);
}

export const determineDifference = (firstNumbers: number[], secondNumbers: number[]): number =>{
    if (firstNumbers.length !== secondNumbers.length) { throw new Error('Arrays must be of the same length');}
    const diffs =  firstNumbers.map((value, index) => value - secondNumbers[index]);
    return diffs.reduce((sum, diff) => sum + Math.abs(diff), 0);
}

export const integration = (path: string): number => {
    const numberArrays: [number[], number[]] = parseInputFile(path);
    const sorted1: number[] = orderNumberAscending(numberArrays[0]);
    const sorted2: number[] = orderNumberAscending(numberArrays[1]);
    return determineDifference(sorted1, sorted2);
}

export const getAmount = (array: number[], targetNumber: number): number => {
    const filteredArray = array.filter(item => item === targetNumber);
    return filteredArray.length;
}

export const integrationSecondStar = (path: string): number => {
    const numberArrays: [number[], number[]] = parseInputFile(path);
    const sorted1: number[] = orderNumberAscending(numberArrays[0]);
    const sorted2: number[] = orderNumberAscending(numberArrays[1]);
    
    let result: number = 0;
    sorted1.forEach(number => { result += getAmount(sorted2, number) * number});
    return result;
}