const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const firstBtn = document.querySelector("#first-front-btn")
const lastBtn = document.querySelector("#last-front-btn")
const zoomInBtn = document.querySelector("#zoomIn-btn")
const zoomOutBtn = document.querySelector("#zoomOut-btn")
const book = document.querySelector("#libro");
const content = document.querySelector("#content")
const menu = document.querySelector("#caja-indice")

var papers = [];

for (let index = 1; index <= 50; index++) {
    papers.push(document.querySelector(`#p${index}`));
}

nextBtn.addEventListener("click",goNextPage);
prevBtn.addEventListener("click",goPrevPage);
firstBtn.addEventListener("click",goFirstPage);
lastBtn.addEventListener("click",goLastPage);
zoomInBtn.addEventListener("click",zoomIn);
zoomOutBtn.addEventListener("click",zoomOut);

let currentLocation = 1;
let numOfPaper = 50;
let maxLocation = numOfPaper + 1; 
let zoomLevel=1;

function zoomIn() {//fun4//
    zoomLevel+=0.1
    content.style.transform="scale("+zoomLevel+") translateY(10%)";
}
function zoomOut() {//fun5//
    zoomLevel-=0.1
    content.style.transform="scale("+zoomLevel+")";
}

function goFirstPage() {//fun6//

    if(currentLocation>1){
        closeBook(true);
        var zI = 50;
        for (let index = 0; index < papers.length; index++) {
            papers[index].classList.remove("arrastre");
            papers[index].style.zIndex = zI;

            zI--;
        }
    }
    currentLocation=1
}
function goLastPage() {//fun7//
    if(currentLocation<maxLocation){
        for (let index = 0; index < papers.length; index++) {
            papers[index].classList.add("arrastre");
            papers[index].style.zIndex = index + 1;
        }
        closeBook(false);
    }
    currentLocation=51;
}

function openBook() {//fun8//
    book.style.transform="translateX(50%)";
}

function closeBook(isAtBeggining) {//fun9//
    if(isAtBeggining){
        book.style.transform="translateX(0%)"
    }else{
        book.style.transform="translateX(100%)"
    }
}

function goPrevPage() {//fun10//
    if(currentLocation > 1){
        if(currentLocation == 2){
            closeBook(true);
        }

        papers[currentLocation - 2].classList.remove("arrastre");
        papers[currentLocation - 2].style.zIndex = 50 - (currentLocation - 2);

        if(currentLocation == 51){
            openBook();
        }

        currentLocation--;
    }
}

function goNextPage() {//fun36//
    if(currentLocation < maxLocation){
        if(currentLocation == 1){
            openBook();
        }

        papers[currentLocation - 1].classList.add("arrastre");
        papers[currentLocation - 1].style.zIndex = currentLocation;

        console.log(papers[currentLocation - 1])

        if(currentLocation == 50){
            closeBook();
        }

        currentLocation++;
    }
}