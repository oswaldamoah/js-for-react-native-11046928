import { arr2, modifiedStrArray } from "./arrayManipulation.js";


function createUserProfiles(originalArray, modifiedArray){
    details = [];
    let id = 1; // Auto-incrementing ID

    for (let i = 0; i < originalArray.length; i++) {
        details.push({
        originalName: originalArray[i],
        modifiedName: modifiedArray[i],
        id: id++, // add 1 to id
        });
  }
  return details;
}

details = createUserProfiles(arr2, modifiedStrArray);
console.log(details)



