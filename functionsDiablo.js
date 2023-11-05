let btn = document.querySelectorAll(".contingut-part-moto");
let mw = document.getElementById("modal");
let close = document.getElementById("closeIc")
let blur = document.getElementById("cont1")
let content = document.getElementsByClassName("cont")[0];

let titol = document.getElementById("partName");
let desc = document.getElementById("partDesc");
let video = document.getElementById("videoPart");
let selected = null;

const tooltipElements = document.querySelectorAll(".tooltip-toggle");

window.onload = function() {

    mw.style.display = "none";

    tooltipElements.forEach(e => {
        e.addEventListener('click', (event) => {
            selected = parseInt(e.textContent)-1;
            modalWindow();
        /*console.log(`El número en el div ${index + 1} es: ${number}`);*/
        })
    });

    btn.forEach(e => {
        e.addEventListener('click', (event) => {
            selected = (e.id-1);
            modalWindow();
        })
    })

    function modalWindow() {
        if (selected != null) {
            mw.style.display = "block";
            titol.textContent = dades[selected].name;
            desc.textContent = dades[selected].info;
            video.innerHTML = dades[selected].video;
            console.log(dades[selected].video)
        }
        else {
            console.log("Error: selected is null");
        }
    }

    close.addEventListener("click", (event) => {
        mw.style.display = "none";
        titol.textContent = "";
        desc.textContent = "";
        video.innerHTML = "";
        blur.style.filter = "blur(0px)";
    })

    mw.addEventListener("click", (event) => {
        mw.style.display = "none";
        titol.textContent = "";
        video.innerHTML = "";
        blur.style.filter = "blur(0px)";
    })

}



