// preview element will be used by every function, so put it into a variable
let preview = document.getElementById("preview");

// initialize font-family for the preview element
changeFontFamily();

// set font-size of the preview element
function changeFontSize() {
    preview.style.fontSize = document.getElementById("fontsize").value + "px";
}

// set font-family for the preview element
function changeFontFamily() {
    preview.style.fontFamily = document.getElementById("fontfamily").value;
}

// change the text of the preview element
function changeSampleText() {
    preview.innerHTML = document.getElementById("sampletext").value;
}