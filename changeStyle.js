function changeWidth () {
    var value = document.getElementById("WIDTH").value;
    var window = document.getElementById("mydiv")
    window.style.width = `${value}px`
}

function changeHeight () {
    var value = document.getElementById("HEIGHT").value;
    var window = document.getElementById("mydiv")
    window.style.height = `${value}px`
}

function radius () {
    console.log("asdjaksdhjaksd")
    var value = document.getElementById("Radious").value;
    var window = document.getElementById("mydiv")
    var header = document.getElementById("mydivheader")
    window.style.borderBottomLeftRadius = `${value}px`
    window.style.borderBottomRightRadius = `${value}px`
    header.style.borderTopLeftRadius = `${value}px`
    header.style.borderTopRightRadius = `${value}px`
}

function headertext () {
    var value = document.getElementById("headertext").value;
    var window = document.getElementById("mydivheader")
    window.innerText = value
}

function bodytext () {
    var value = document.getElementById("bodytext").value;
    var window = document.getElementById("text")
    window.textContent = value
}

