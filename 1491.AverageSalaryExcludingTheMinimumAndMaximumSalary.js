let salary = [8000,9000,2000,3000,6000,1000];
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    console.log(max)
    console.log(min)
    let total = 0;
    for (let i=0; i<salary.length; i++){
        if (salary[i] !== max && salary[i] !== min){
            total += salary[i];
        }
    }
    return total/(salary.length - 2)
};
console.log(average(salary))

// ------>Pseudocode
/*
1. Find the max
2. Find the min
3. Initilize total Salary
4. Loop Through Salary
    a. If Current_Salary doesn't equal to max and min.
        i. Salary assign to total
5. Return total divided by length of salary and minus 2
*/