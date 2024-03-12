function offButton() {
    let a = document.getElementById("bulbImage")
    let b = document.getElementById("catimg")
    let c = document.getElementById("notify")
    let d = document.getElementById("btn-off")
    let e = document.getElementById("btn-on")
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    c.innerHTML = "Switched OFF"
    d.style.backgroundColor = "#e12d39"
    e.style.backgroundColor = "#CBD2D9"
}

function onButton() {
    let a = document.getElementById("bulbImage")
    let b = document.getElementById("catimg")
    let c = document.getElementById("notify")
    let d = document.getElementById("btn-off")
    let e = document.getElementById("btn-on")
    a.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    b.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    c.innerHTML = "Switched ON"
    d.style.backgroundColor = "#CBD2D9"
    e.style.backgroundColor = "#22c55e"
}