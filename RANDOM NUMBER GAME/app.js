let rnum = Math.floor(Math.random() * 100 + 0)
let counter = 1

function findRandomNumber(){
    let xnum = document.getElementById("inputnum").value;
    if (typeof xnum === "string" && xnum.length === 0) {
        alert("Zəhmət olmasa rəqəm daxil edin");
      }
    else if (xnum == rnum) {
        alert(`Təbriklər siz ${counter} dəfəyə düzgün tapdınız`);
    }
    else if (xnum < rnum) {
        counter++;
        alert("Daha böyük rəqəm yazın");
    }
    else {
        counter++;
        alert("Daha kiçik rəqəm yazın")
    }

}