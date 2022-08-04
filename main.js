const myfunction1  = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    return result;
};
const myfunction2  = function(){
    let num1 = document.getElementById("num3").value;
    let num2 = document.getElementById("num4").value;
    let result = Number(num1) - Number(num2);
    return result;
};
const myfunction3  = function(){
    let num1 = document.getElementById("num5").value;
    let num2 = document.getElementById("num6").value;
    let result = Number(num1) * Number(num2);
    return result;
};
const myfunction4  = function(){
    let num1 = document.getElementById("num7").value;
    let num2 = document.getElementById("num8").value;
    let result = Number(num1) / Number(num2);
    return result;
};