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

// TABS FUNCTIONALITIES

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll(".tab")

tabs.forEach(tab =>{
    tab.addEventListener("click",()=> {

        tabs.forEach(tab2 =>{
            tab2.classList.remove("active")
        })

        tab.classList.add("active")
        
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("active")
        })
        target.classList.add("active")
    })
})

// MENU MODEL FUNCTIONALITY
const menuItems = document.querySelectorAll(".item")
const menuModel = document.querySelector(".model-container")
const modelIcon = document.querySelector(".model-icon")
const modelContent = document.querySelector(".model-content")
// const modelHeader = document.querySelector(".model-content > .item-content > .item-header > h3")

let modelHeader
let modelParagraph

menuItems.forEach(item =>{
    item.addEventListener("click",() =>{
        menuModel.classList.add("active")
        modelContent.innerHTML += item.innerHTML;
        modelHeader = document.querySelector(".model-content > .item-content > .item-header > h3")
        modelParagraph = document.querySelector(".model-content > .item-content > .item-header > p")
        console.log(modelContent);
        console.log(modelHeader);
    })
})

modelIcon.addEventListener("click",() =>{
    menuModel.classList.remove("active")
    modelContent.innerHTML = ''
    // modelContent.classList.remove(modelContent.classList[1])
    // console.log(modelContent);
})

menuModel.addEventListener("mouseenter",() =>{
    modelHeader.classList.add("active")
    modelParagraph.classList.add("active")

})

// CARD SLIDER
// $('.slider').slick();

window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1
    });
  };
