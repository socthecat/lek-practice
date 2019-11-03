switchContent = a => {
    document.querySelectorAll('[id]').forEach((el) => document.getElementById(el.id).style.display = "none");
    document.getElementById(a).style.display = "block";
}