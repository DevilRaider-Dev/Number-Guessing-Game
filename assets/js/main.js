

//helper
function getId(element) {
    return document.getElementById(element);
}

//change design
function showCostumTextBox() {
    if (getId("roundsCostum").checked) {
        getId("txt-costumRounds").style.display = "block"
    } else {
        getId("txt-costumRounds").style.display = "none"
    }
}

//take guess
function guess(){

}