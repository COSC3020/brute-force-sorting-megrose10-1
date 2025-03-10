function permutationSort(a) {
    //let isSorted = false;
    //Amount of permutations
    let permNum = 0;
    let listOfPerms = [];
    //let numToMove = 0;

    //If length is 0 or 1, list is sorted
    if(a.length <= 1) { 
        permNum++;
        return permNum;
    }
    //Check if array is sorted, if so return
    if(checkSort(a)) {
        //console.log("already sorted");
        permNum++;
        return permNum;
    }
    if(a.length == 2) {
        if(!checkSort(a)) {
            permNum++;
            [a[0], a[1]] = [a[1], a[0]];
        }
        return permNum;
    }
    listOfPerms = permutations(a);
    //console.log("Permutations: ", listOfPerms);
    
    //Looking at the list of permutations, count perms until you find the sorted permutation
    for(let perm of listOfPerms) {
        permNum++;
        if(checkSort(perm)) {
            return permNum;
        }
    }
    //console.log("Number of permutations: " + permNum);
    //console.log("Sorted: " + a);
    //return permNum;
}

function permutations(a) {
    let perms = [];

    //If array is empty or one element, return
    if(a.length <= 0) {
        return [a];
    }
    //For each element in the array, generate its permutatiosn
    for(let i = 0; i < a.length; i++) {
        let perm = a[i]; //Element we are keeping the same
        let rePerm = a.slice(0, i).concat(a.slice(i + 1));
        //Recursively call permutations to find permutatiosn of what is left in array
        let reArrPerm = permutations(rePerm);

        // Put together the current element with the permutations we found
        for(let permArr of reArrPerm) {
            let permsTogether = [perm, ...permArr];
            let duplicate = false;
            //See if permutation has already been found
            for(let existingPerm of perms) {
                if(duplicateTest(existingPerm, permsTogether)) {
                    duplicate = true;
                    break;
                }
            }

            if(!duplicate) {
                perms.push(permsTogether);
            }
        }
        //perms = perms.concat(reArrPerm.map(permArr => [perm, ...permArr]));
    }
    //console.log(perms);
 
    return perms;
    
}

function checkSort(array) {
    //Go through array to check if it is sorted
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]) {
                //console.log("this is false");
                return false;
            }
        }
    }
    //console.log(array);
    return true;
}

//Function to test if there is a duplicate
function duplicateTest(previousArray, newArray) {
    for(let i = 0; i < previousArray.length; i++) {
        if(previousArray[i] != newArray[i]) {
            return false;
        }
    }

    return true;
}

console.log(permutationSort([0, 1, 0]));
console.log(permutationSort([0, 1]));
console.log(permutationSort([1, 0]));
