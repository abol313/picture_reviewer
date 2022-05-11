/*<!--In the name of kindly generous ALLAH-->
<!--Thanks ALLAH-->
*/

const imagesContainers = document.querySelectorAll(".container .img_cont")
const shower = document.getElementsByClassName("shower")[0]
const showerImg = document.querySelector(".shower img")
let started = true

for (let imageContainer of imagesContainers) {
    imageContainer.querySelector(".above").addEventListener("mousemove", (ev) => {
        onMouseOverImage(imageContainer.querySelector("img"), ev.x, ev.y)
    })
    imageContainer.querySelector(".above").addEventListener("mouseout", (ev) => {
        onMouseOutImage()
    })
}



function onMouseOverImage(el, x, y) {
    console.log(0)
    if (started) {
        console.log(1)
        shower.style.display = "inline"
        started = false
    }
    render(el, x, y)
}
function onMouseOutImage() {
    console.log(2)
    started = true
    shower.style.display = "none"
}
function render(image, x, y) {
    const bound = image.getBoundingClientRect()
    const showerBound = shower.getBoundingClientRect()
    const showerImgBound = showerImg.getBoundingClientRect()
    let relX = (x - bound.left) / bound.width, relY = (y - bound.top) / bound.height
    const outX = relX * showerImgBound.width - showerBound.width / 2
    const outY = relY * showerImgBound.height - showerBound.height / 2

    shower.style.left = x - showerBound.width / 2+"px"
    
    if(y > showerBound.height / 2 * 3)
        shower.style.top = y - showerBound.height / 2 * 3 +"px"
    else
        shower.style.top = y + showerBound.height / 2 +"px"
    

    showerImg.style.marginLeft = -outX + "px"
    showerImg.style.marginTop = -outY + "px"
    return `${outX}px ${outY}px`
}
