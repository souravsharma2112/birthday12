
// ============= Menubar toggle =========== 
function btnToggle() {
    var menuWork = document.getElementById("hidden");
    if (menuWork.style.display === "none") {
      menuWork.style.display = "block";
    } else {
      menuWork.style.display = "none";
    }
}
// ============ first slider option =========
const slides = document.querySelectorAll(".slide")
var count = 0

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

var newCount = 0;
const goNxt = () => {

    if (newCount == 5) {
        count = 5;
        newCount = 0;
    }
    if (count == 5) {
        count = -1;
    }
    count++
    slideImage()    
}
const goPrev = () => {
    if (count == 0) {
        count = 6;
        newCount = 5;
    }
    count--
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
// ============ first slider option =========
const slides2 = document.querySelectorAll(".slide2")
var counts = 0

slides2.forEach((slide2,index) => {
    slide2.style.left = `${index * 100}%`
})

var newCount = 0;
const goNxt2 = () => {
    if (newCount == 4) {
        counts = 4;
        newCount = 0;
        console.log("heelo i am here");
    }
    if (counts == 4) {
        counts = -1;
    }
    counts++
    slideImage2()    
}
const goPrev2 = () => {
    if (counts == 0) {
        counts = 5;
        newCount = 4;
    }
    counts--
    slideImage2()
}

const slideImage2 = () => {
    slides2.forEach(
        (slide2) => {
            slide2.style.transform = `translateX(-${counts * 100}%)`
        }
    )
}
