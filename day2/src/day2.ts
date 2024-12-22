import { ReactorReport } from './reactorReport';
import * as fs from 'fs'

export const RetrieveReportsFromTextInput = (filePath: string): ReactorReport[] =>{
    let ReportArray: ReactorReport[] = [];

    const buffer: string = fs.readFileSync(filePath, 'utf-8');
    const lines: string[] = buffer.split('\n');

    lines.forEach(line => {
        const levelArray = line.split(' ').map(Number);
        ReportArray.push(new ReactorReport(levelArray))
    })

    return ReportArray;
}

export const getNumberOfValidReports = (reports: ReactorReport[]): Number =>{
    let numberOfValidReports = 0;
    reports.forEach(report => {
        if(report.ValidateReport()){numberOfValidReports += 1}}
    );
    return numberOfValidReports;
}

export const getNumberOfValidReportsWithDampening = (reports: ReactorReport[]): Number =>{
    let numberOfValidReports = 0;
    reports.forEach(report => {
        if(report.ValidateReportWithDampening(1)){numberOfValidReports += 1}}
    );
    return numberOfValidReports;
}