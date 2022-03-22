const fibonacci = function(number) {
    if(number>0 && number == +number){
        let result= [0,1];
        for(let i = 0; i<=number-2; i++){
            let series = result[i] + result[i+1]
            result.push(series);
        }
        return result[number];
    } else {
        return "OOPS"
    }
};
console.log(fibonacci("10"))
// Do not edit below this line
module.exports = fibonacci;
