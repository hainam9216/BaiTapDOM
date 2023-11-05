var btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {
    //IN
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var num4 = Number(document.getElementById("num4").value);
    var num5 = Number(document.getElementById("num5").value);

    //Process
    var TrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

    //OUT p
    var tagP = document.getElementById("result");
    tagP.innerHTML = "Trung Bình: " + TrungBinh;
}