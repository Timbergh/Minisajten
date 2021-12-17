/* Skrev inte den här koden själv men har läst på lite om det */

const buttonleft = document.querySelector("#item-list #scroll-left");

buttonleft.addEventListener("click", ()=> {
    document.getElementById("item-list").scrollLeft -= 230;
})

const buttonright = document.querySelector("#item-list #scroll-right");

buttonright.addEventListener("click", ()=> {
    document.getElementById("item-list").scrollLeft += 230;
})
