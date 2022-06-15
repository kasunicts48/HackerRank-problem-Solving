function simpleArraySum(ar) {
    // Write your code here
    var total = 0;
    for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        total = total+ element    
    }

    return total;
}

const answer = simpleArraySum([1,2,3,4,10,11]);
console.log(answer);