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

export const calculateResult = (inputArray: number[][]): number => {
    let result: number = 0;
    for(let i = 0; i < inputArray.length; i++){
        result += inputArray[i][0] * inputArray[i][1];
    }
    return result;
}

export const extractMulStepsAndCommands = (input: string): string[]|null =>{
    const regexPattern = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g; 
    const matches = [...input.matchAll(regexPattern)];
    const resultArray: string[] = matches.map(match => match[0]);
    return resultArray;
}

export const followDoCommands = (input: string[]):string[] =>{
    let stopCommand = false;
    let resultArray: string[] = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] === `don't()`){
            stopCommand = true;
        }
        if(input[i] === `do()`){
            stopCommand = false;
        }
        if(!stopCommand && input[i] !== `do()`&& input[i] !== `don't()`){
            resultArray.push(input[i]);
        }
    }

    return resultArray;
}
