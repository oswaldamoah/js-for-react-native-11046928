// Task 1
function processArray(arr){
    new_arr = [];
    for (item in arr){
        if(item % 2 === 0){
            new_arr.push(item**2);
        }
        else{
            new_arr.push(item*3);
        }
    }
    return new_arr;
}

// Example
arr0 = [1, 2, 3, 4, 5];
arr1 = processArray(arr0);
console.log(arr1);