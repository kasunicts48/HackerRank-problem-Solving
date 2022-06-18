function miniMaxSum(arr) {
    // Write your code here
    // console.log(arr);
    var maxVal = 0;
    var minVal = 0;
    for (let index = 1; index < arr.length; index++) {
        maxVal = maxVal + arr[index];
        
    }

    for (let index = 0; index < arr.length -1; index++) {
       minVal = minVal + arr[index];
        
    }

    // console.log(minVal+" "+maxVal);

    return `${minVal} ${maxVal}`;
    

}
console.log(miniMaxSum([1,3,5,7,9]));