// let btnOpen = document.querySelector(".icon-nav");
// let nav = document.querySelector(".container nav");

// btnOpen.onclick = () => {
//     nav.style.opacity = "100%";
//     nav.style.transform = 'translateY(0px)';
// }

let nav = document.querySelector(".container nav");
let btnOpen = document.querySelector(".container .icon-nav");
let btnExit = document.querySelector(".btn-log .exit");

btnOpen.onclick = () => {
    btnOpen.style.opacity = "0";
    nav.style.opacity = "100%";
    nav.style.transform = 'translateY(0px)';
    btnExit.style.opacity = "100%";
    btnExit.style.zIndex = "100";

    btnExit.onclick = () =>{
        nav.style.opacity = "0";
        btnOpen.style.opacity = "100%";
        btnExit.style.opacity = "0";
        btnExit.style.zIndex = "-100";
    }

}
