var btnClick = document.getElementById("btnClick").onclick= function(){
    //IN
    var KySo = Number(document.getElementById("KySo").value)
    // Process
    var Tong2KySo = 0
    //Đơn vị
    Tong2KySo = KySo % 10
    //Chục
    Tong2KySo += Math.floor(KySo / 10) 

    // OUT
    var tagP = document.getElementById("result")
    tagP.innerHTML = "Tổng 2 Ký số là: "+ Tong2KySo
}