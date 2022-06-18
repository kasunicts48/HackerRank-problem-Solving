function countCandles(candles) {
    // Write your code here
    var max = Math.max(...candles);
    var candles = candles.sort(); 
    var count = 0;
    
    for (let index = 0; index < candles.length; index++) {
        if (candles[index] === max) {
            count++
        }
        
    }
    return count;
    

}
console.log(countCandles([18,90,90,13,90,75,90,8,90,43]));