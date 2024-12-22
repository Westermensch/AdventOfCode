import * as fs from 'fs'

export const readTestFileIntoString = (filePath:string) =>{
    return fs.readFileSync(filePath, 'utf-8');
}

export const extractMulSteps = (input: string): string[]|null => {
    const regexPattern = /mul\(\d{1,3},\d{1,3}\)/g; 
    const matches = input.match(regexPattern);
    return matches;
}

export const extractNumbers = (input: string[]):number[][] =>{
    const regexPattern = /\d{1,3}/g;
    const resultArray: number[][] = input.map(commandString =>{
        const matches = commandString.match(regexPattern);
        if (matches){ 
            const num1 = parseInt(matches[0]); 
            const num2 = parseInt(matches[1]); 
        return [num1, num2]; 
        } else { return []; }
    })

    return resultArray;
}