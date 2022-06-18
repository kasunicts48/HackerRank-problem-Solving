function gridChallenge(grid) {
    // Write your code here
    var len = grid[0].length;
    var ans = "";
    for (let index = 0; index < grid.length; index++) {
        if(grid[index].length === len){
            return "YES"
        }else{
            return "NO"
        }
    }
}

// gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
