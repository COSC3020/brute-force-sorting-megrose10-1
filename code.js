function permutationSort(a) {
    //let isSorted = false;
    let permNum = 0;
    let perms = [];
    let sortedPermNum = 0;
    //let numToMove = 0;
    if(checkSort(a)) {
        //console.log("already sorted");
        return permNum;
    }

    permutations(a, a.length, perms);
    
    
    for(let i = 0; i < perms.length; i++) {
        if(checkSort(perms[i])) {
            permNum++;
            a.length = 0;
            a.push(...perms[i]);
            return permNum;
        }
        //sortedPermNum = i;
        permNum++;
    }

    //a = [perms[sortedPermNum]];
    console.log(a);
    //console.log("Number of permutations: " + permNum);
    //console.log("Sorted: " + a);
    return permNum;
}

function permutations(a, n, perms) {
    //Array to keep track of times we swap elements
    let c = [];

    //Initialize c to be the length of our array and each element as zero
    for(let i = 0; i < n; i++) {
        c[i] = 0;
    }

    //Start with element after first element
    let i = 1;

    //While there are still permuations
    while(i < n) {
        //If element should be swapped
        if(c[i] < i) {
            //if i is even, switch first and i positions
            if(i % 2 == 0) {
                let temp = a[0];
                a[0] = a[i];
                a[i] = temp;
            }
            //if i is odd, switch i and c[i] positions 
            else{
                let temp = a[c[i]];
                a[c[i]] = a[i];
                a[i] = temp;
            }

            //add permutation of array to perms
            perms.push([...a]);

            c[i]++;
            i = 0;
        }
        else {
            c[i] = 0;
            i++;
        }
    }
}

function checkSort(array) {

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

//console.log(permutationSort([0, 1, 0]));
//console.log(permutationSort([1, 0, 1]));
//console.log(permutationSort([2, 1]));
