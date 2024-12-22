import * as fs from 'fs'

export const readTestFileIntoString = (filePath:string) =>{
    return fs.readFileSync(filePath, 'utf-8');
}