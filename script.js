/*<!--In the name of kindly generous ALLAH-->
<!--Thanks ALLAH-->
*/

const imagesContainers = document.querySelectorAll(".container .img_cont")
const shower = document.getElementsByClassName("shower")[0]
const showerImg = document.querySelector(".shower img")
let started = true

for (let imageContainer of imagesContainers) {
    let above =  imageContainer.querySelector(".above")
    let image =  imageContainer.querySelector("img")
    above.addEventListener("mousemove", (ev) => {
        onMouseOverImage(image, ev.x, ev.y)
    })
    above.addEventListener("touchmove", (ev)=> {
        onMouseOverImage(image, ev.touches[0].pageX, ev.touches[0].pageY)
    })
    above.addEventListener("touchend",onMouseOutImage)
    above.addEventListener("mouseout",onMouseOutImage)
}



function onMouseOverImage(el, x, y) {
    console.log(0)
    if (started) {
        console.log(1)
        shower.querySelector("img").setAttribute("src",el.getAttribute("src"))
        shower.style.display = "inline"
        started = false
        document.body.style.overflow="hidden"
        document.querySelector(".list").style.overflow="hidden"
    }
    render(el, x, y)
}
function onMouseOutImage() {
    started = true
    document.body.style.overflow="hidden"
    document.querySelector(".list").style.overflow="hidden"
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
    
    if(x <= showerBound.width / 2){
        shower.style.left = x + showerBound.width / 2 +"px"
        shower.style.top = y - showerBound.height / 2 +"px"
    }else if(x>= document.body.getBoundingClientRect().right-showerBound.width / 2 ){
        shower.style.left = x - showerBound.width / 2 * 3+"px"
        shower.style.top = y - showerBound.height / 2 +"px"   
    }

    showerImg.style.marginLeft = -outX + "px"
    showerImg.style.marginTop = -outY + "px"
    return `${outX}px ${outY}px`
}
