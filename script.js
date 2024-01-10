function table() {
    let getData =document.getElementById("table").value;
    let putData =document.getElementById("display");

    var i, temp;
        for(i = 1; i <= 10; i++){
            putData.innerHTML += getData + "X" + i + "="  + getData * i + "<br>"
        }
}