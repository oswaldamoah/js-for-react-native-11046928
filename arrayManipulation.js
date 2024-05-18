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

// Example for Task 1
arr0 = [1, 2, 3, 4, 5];
arr1 = processArray(arr0);
//console.log(arr1);


function formatArrayStrings(strArr, numArr){
    const modifiedStrArray = [];

    if (numArr.length !== strArr.length) {
        throw new Error("The two array arguments must be of the same length");
    }

    try {
        arr3 = processArray(arr1);
        

        for (let i=0; i<arr1.length; i++) {
            const str = strArr[i];
            const num = numArr[i];

            if (num % 2 === 0) {
                modifiedStrArray.push(str.toUpperCase());
            } else {
                modifiedStrArray.push(str.toLowerCase());
            }
        }
    }
    catch (error) {
        console.error("Error processing array", error);
    }

    return modifiedStrArray;
}

arr2 = ["kumi", "patrick", "sonic", "akoto", "mutombo"]

arr3 = formatArrayStrings(arr2, arr0);

console.log(arr3);




