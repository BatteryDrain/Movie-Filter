let FILTER = "all";
let FIGURES = document.querySelectorAll("figure");

console.log(FIGURES);

filter_select.addEventListener("change", () => {
    FILTER = filter_select.value;
    console.log(FILTER);

    for(i = 0; i < FIGURES.length; i++){
        if(FIGURES[i].classList.contains("hide")){
            FIGURES[i].classList.toggle("hide");
        }
    }
    if(FILTER == "pg-13"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.ratted == "pg"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "pg"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.ratted == "pg-13"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == 1900){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.agemade > 1999){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == 2000){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.agemade < 2000){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "live_action"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.animstion == "t"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "animated"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.animstion == "f"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
});