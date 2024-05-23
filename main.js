document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("popupMostrado")) {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }
});

function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    localStorage.setItem("popupMostrado", "true");
}