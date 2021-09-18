// HEADER TRANSITION
const headerH2 = document.querySelector(".header > h2");
const headerP = document.querySelector(".header > p")
const headerSpan = document.querySelector(".header > span")
const headerBtn = document.querySelector(".header > a")

window.addEventListener("load",(e) =>{
    setTimeout(() => {
        headerH2.style.transform = "translateX(0)"
        headerP.style.transform = "translateX(0)"
        headerSpan.classList.add("span")
        headerBtn.classList.add("btn")
    }, 1000);
})

// MENU TAGGLE
const burger = document.querySelector(".burger")
const burgerOpenIcon = document.querySelector(".burgerIcon.open")
const burgerCloseIcon = document.querySelector(".burgerIcon.close")

burgerOpenIcon.addEventListener("click",()=>{
    burgerOpenIcon.style.display = "none"
    burgerCloseIcon.style.display = "inline-block"
    burger.style.transform = "translateY(0)"
});

burgerCloseIcon.addEventListener("click",()=>{
    burgerOpenIcon.style.display = "inline-block"
    burgerCloseIcon.style.display = "none"
    burger.style.transform = "translateY(-60rem)"
});