import * as fs from 'fs'

export const readTestFileIntoString = (filePath:string) =>{
    return fs.readFileSync(filePath, 'utf-8');
}

export const extractMulSteps = (input: string): string[]|null => {
    const regexPattern = /mul\(\d{1,3},\d{1,3}\)/g; 
    const matches = input.match(regexPattern);
    return matches;
}