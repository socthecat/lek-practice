function content1() {
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
}

function content2() {
    document.getElementById("content2").style.display = "block";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content3").style.display = "none";
}

function content3() {
    document.getElementById("content3").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content1").style.display = "none";
}
