var btnClick = document.getElementById("btnClick").onclick= function(){
    //IN
    var Dai = Number(document.getElementById("Dai").value)
    var Rong = Number(document.getElementById("Rong").value)
    // Process
    var chuVi = 2*Dai + 2*Rong
    // OUT
    var tagP = document.getElementById("result")
    tagP.innerHTML = "Chu vi hình chữ nhật là: "+ chuVi
}