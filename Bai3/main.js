const USD = 23500
var bthClick = document.getElementById("btnClick").onclick = function(){
    //IN
    var inputUSD = Number(document.getElementById("inUSD").value)
    //Process
    var outVND = inputUSD*23500;
    //OUT
    var tagP = document.getElementById("result")
    tagP.innerHTML = new Intl.NumberFormat().format(outVND)
}