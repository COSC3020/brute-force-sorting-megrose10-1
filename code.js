function permutationSort(a) {
    let isSorted = false;
    let permNum = 1;
    //let numToMove = 0;
    if(checkSort(a)) {
        console.log("already sorted");
        return permNum;
    }
    while(!isSorted) {
        let numToMove = 0;
        //let num = 0;
        for(let i = 1; i < a.length; i++) {
            let tmp = a[numToMove];
            a[numToMove] = a[i];
            a[i] = tmp;
            permNum++;
            numToMove++;
            if(checkSort(a) == true) {
                isSorted = true;
                break;
                //i = array.length;
            }
        }
    }
    //console.log("Number of permutations: " + permNum);
    //console.log("Sorted: " + a);
    return permNum;
}

function checkSort(array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length - 1; j++){
            if(array[i] > array[j]) {
                //console.log("this is false");
                return false;
            }
        }
    }
    //console.log(array);
    return true;
}

let array = [2, 3, 4, 1, 5];
let a = [1, 2, 3];
console.log(permutationSort(a));
