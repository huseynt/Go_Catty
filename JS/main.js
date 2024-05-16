const blockItem = document.querySelectorAll(".template-block-item")
var i = 0
setInterval(growItem,1500)
function growItem() {
    if(i<blockItem.length) {
        if(!blockItem[i].classList.contains("activeItem")) {
            blockItem[i].classList.add("activeItem")
        }
        if(!blockItem[i-1]=="") {
            blockItem[i-1].classList.remove("activeItem")
        }
    } else {
        blockItem[blockItem.length-1].classList.remove("activeItem")
        i=0
        if(!blockItem[i].classList.contains("activeItem")) {
            blockItem[i].classList.add("activeItem")
        }
        if(!blockItem[i-1]=="") {
            blockItem[i-1].classList.remove("activeItem")
        }
    }
    i++
}