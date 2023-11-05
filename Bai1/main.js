var btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {
    //IN
    var Luong1ngay = document.getElementById("Luong1Ngay").value;
    var Ngaylam = document.getElementById("NgayLam").value;

    //Process
    var TongLuong = Luong1ngay * Ngaylam;

    //OUT p
    var tagP = document.getElementById("result");
    tagP.innerHTML = "Tổng lương là: " + TongLuong;
}







