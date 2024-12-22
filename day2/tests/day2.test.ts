import * as Day2 from "../src/day2";
import { ReactorReport } from '../src/reactorReport';

test("RetrieveReportsFromTextInput__ExampleInput__ReturnArrayOfReactorReport", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/example.txt");
    expect(reports[0].levels).toEqual([7, 6, 4, 2, 1]);
    expect(reports[1].levels).toEqual([1, 2, 7, 8, 9]);
    expect(reports[2].levels).toEqual([9, 7, 6, 2, 1]);
    expect(reports[3].levels).toEqual([1, 3, 2, 4, 5]);
    expect(reports[4].levels).toEqual([8, 6, 4, 4, 1]);
    expect(reports[5].levels).toEqual([1, 3, 6, 7, 9]);
});

test("ReactorReport.ValidateReport__DecreasingReportWithAcceptableSteps__ReturnTrue", ()=>{
    const report = new ReactorReport([7, 6, 4, 2, 1]);
    expect(report.ValidateReport()).toEqual(true);
});

test("ReactorReport.ValidateReport__IncreasingReportWithNotAcceptableSteps__ReturnFalse", ()=>{
    const report = new ReactorReport([1, 2, 7, 8, 9]);
    expect(report.ValidateReport()).toEqual(false);
});

test("ReactorReport.ValidateReport__DecreasingReportWithNotAcceptableSteps__ReturnFalse", ()=>{
    const report = new ReactorReport([9, 7, 6, 2, 1]);
    expect(report.ValidateReport()).toEqual(false);
});

test("ReactorReport.ValidateReport__DevreasingAndIncreasing__ReturnFalse", ()=>{
    const report = new ReactorReport([1, 3, 2, 4, 5]);
    expect(report.ValidateReport()).toEqual(false);
});

test("ReactorReport.ValidateReport__TwoNumbersMatch__ReturnFalse", ()=>{
    const report = new ReactorReport([8, 6, 4, 4, 1]);
    expect(report.ValidateReport()).toEqual(false);
});

test("ReactorReport.ValidateReport__IncreasingReportWithAcceptableSteps__ReturnTrue", ()=>{
    const report = new ReactorReport([1, 3, 6, 7, 9]);
    expect(report.ValidateReport()).toEqual(true);
});

test("getNumberOfValidReports__ExampleInput__Return2", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/example.txt");
    expect(Day2.getNumberOfValidReports(reports)).toEqual(2);
});

test("getNumberOfValidReports__RealInput__ReturnResult", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/real.txt");
    expect(Day2.getNumberOfValidReports(reports)).toEqual(585);
});

test("getNumberOfValidReports__RealInput__ReturnResult", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/example.txt");
    expect(Day2.getNumberOfValidReports(reports)).toEqual(2);
});

test("ReactorReport.ValidateReportWithDampening__CanBeFixedByDampeningOne__ReturnTrue", ()=>{
    //1 3 2 4 5: Safe by removing the second level, 3.
    const report = new ReactorReport([1, 3, 2, 4, 5]);
    expect(report.ValidateReportWithDampening(1)).toEqual(true);
});

test("ReactorReport.ValidateReportWithDampening__AlreadySafe__ReturnTrue", ()=>{
    //1 3 2 4 5: Safe by removing the second level, 3.
    const report = new ReactorReport([1, 2, 7, 8, 9]);
    expect(report.ValidateReportWithDampening(1)).toEqual(false);
});

test("getNumberOfValidReportsWithDampening__ExampleInput__Return4", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/example.txt");
    expect(Day2.getNumberOfValidReportsWithDampening(reports)).toEqual(4);
});

test("getNumberOfValidReportsWithDampening__RealInput__ReturnResult", ()=>{
    const reports: ReactorReport[] = Day2.RetrieveReportsFromTextInput("./day2/tests/real.txt");
    expect(Day2.getNumberOfValidReportsWithDampening(reports)).toEqual(626);
});