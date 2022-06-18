function timeConversion(s) {
    // Write your code here
    const first2 = s.slice(0, 2);
    const last2 = s.slice(-2);
    switch (last2) {
        case "AM":
            if(first2 === "12"){
                return "00:"+s.slice(3,5)+":"+s.slice(6,8)
            }
            break;
        case "PM":
            if(first2 === "01"){
                return "13:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "02") {
                return "14:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "03") {
                return "15:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "04") {
                return "16:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "05") {
                return "17:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "06") {
                return "18:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "07") {
                return "19:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "08") {
                return "20:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "19") {
                return "21:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "10") {
                return "22:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "11") {
                return "23:"+s.slice(3,5)+":"+s.slice(6,8)
            }if (first2 === "12") {
                return "12:"+s.slice(3,5)+":"+s.slice(6,8)
            }
        default:
            break;
    }
    
    return first2+":"+s.slice(3,5)+":"+s.slice(6,8)



}

console.log(timeConversion("06:40:03AM"));