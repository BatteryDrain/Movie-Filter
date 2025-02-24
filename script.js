let FILTER = "all";
let FIGURES = document.querySelectorAll("figure");

console.log(FIGURES);

filter_select.addEventListener("change", () => {
    FILTER = filter_select.value;

    if(FILTER == "select one"){
        FILTER = "all";
    }
    console.log(FILTER);

    for(i = 0; i < FIGURES.length; i++){
        if(FIGURES[i].classList.contains("hide")){
            FIGURES[i].classList.toggle("hide");
        }
    }
    if(FILTER == "pg-13"){
        for(i = 0; i < 7; i++){
            if(FIGURES[i].dataset.ratted == "pg"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "all"){
        for(i = 0; i < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == 1900){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].dataset.agemade < 2000){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "all"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "live_action"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].dataset.animstion == "t"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "animated"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
});