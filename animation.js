function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "500px";
    elem.style.top = "100px";
}
addLoadEvent(positionMessage);