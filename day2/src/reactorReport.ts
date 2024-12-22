export class ReactorReport {
    levels: number[] = [];

    constructor(levels: number[]) {
        this.levels = levels;
    }

    ValidateReport = () => {

        // If a report only consists out of 1 number, it cant be decreasing or increasing, so we return false
        if (this.levels.length <= 2) return false;

        // For the case that the first two numbers are matching, the report is neither in- nor decreasing
        if (this.levels[0] === this.levels[1]) return false;

        // Check if the report starts increasing or decreasing to determine the step factor
        if (this.levels[0] > this.levels[1]) {
            return this.levels.every((number, index) => { return index === this.levels.length - 1 || (number !== this.levels[index + 1] && number - this.levels[index + 1] <= 3 && number > this.levels[index + 1]) });
        }
        return this.levels.every((number, index) => { return index === this.levels.length - 1 || (number !== this.levels[index + 1] && number - this.levels[index + 1] >= -3 && number < this.levels[index + 1]) });
    }


    Validate = (array: number[])=>{
        if (array.length <= 2) return false;

        if (array[0] === array[1])return false;

        // Check if the report starts increasing or decreasing to determine the step factor [5,3,2]
        if (array[0] > array[1]) {
            for (let i = 0; i < array.length - 1; i++) {
                if ((array[i] === array[i + 1] || (array[i] - array[i + 1] > 3) || (array[i] < array[i + 1]))) {
                    return false;
                }
            }
        }

        // Check if the report starts increasing or decreasing to determine the step factor [2,3,5]
        if (array[0] < array[1]) {
            for (let i = 0; i < array.length - 1; i++) {
                 if ((array[i] === array[i + 1] || (array[i] - array[i + 1] < -3) || (array[i] > array[i + 1]))) {
                    return false;
                }
            }
        }
        return true;
    }

    CutAndTry = (position: number): boolean =>{
        let array = [...this.levels];
        array.splice(position, 1);
        return this.Validate(array);
    }

    VanillaTry = ():boolean =>{
        let array = [...this.levels];
        return this.Validate(array);
    }

    ValidateReportWithDampening = (dampeningLevel: number) => {
        let safeWithoutDampening = this.VanillaTry();
        let safeWithDampening = false;

        if(safeWithoutDampening){
            return true;
        }

        if(!safeWithoutDampening){
            for(let i = 0; i < this.levels.length; i++){
                safeWithDampening = this.CutAndTry(i);
                if(safeWithDampening){
                    return true;
                }
            }
        }

        return false;
    }
}
