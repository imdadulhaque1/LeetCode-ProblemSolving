let salary = [8000,9000,2000,3000,6000,1000];

const average = (salary)=>{
    let min=salary[0];
    let max = 0;
    let total = 0;
    for(let i=0; i< salary.length; i++){
        if(salary[i] < min){
            min = salary[i]
        }else if(salary[i] > max){
            max = salary[i]
        }
    }
    for(let j=0; j<salary.length; j++){
        if(salary[j]!=max && salary[j]!=min){
            total +=salary[j];
        }
    }
    return total/(salary.length - 2)
}
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