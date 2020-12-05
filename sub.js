var form = document.querySelector("form");

form.onsubmit = function (Event) {
    var con = confirm("Are you sure that want you to submit this data?");
    if (!con) {
        Event.preventDefault();
    }
}


var changed = false;
document.querySelector("form").onchange = function () {
    changed = true;
}

var tout = new Event("timeout");
document.querySelector("form").addEventListener("timeout", function () {
    alert("Please enter your data!");
    location.reload();
})
var timer = setTimeout(function () {
    if (!changed) {
        document.querySelector("form").dispatchEvent(tout);
    }
}, 30000);
