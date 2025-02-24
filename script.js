/* let AGE = "all";
let ANIMATION = "all";
let RATTING = "all"; */
let FILTER = "all";
let FIGURES = document.querySelectorAll("figure");

console.log(FIGURES);


/* 
selanimation.addEventListener("change", function(){
    console.log("change animation filter");
    ANIMATION = selanimation.value;

    if(ANIMATION == "select one"){
        ANIMATION = "all"
    }

    console.log(ANIMATION);

    // if(ANIMATION == "true"){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].dataset.animstion == "f"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(ANIMATION == "false"){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].dataset.animstion == "t"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(ANIMATION == "all"){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].classList == "hide"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
});
selage.addEventListener("change", function(){
    console.log("change age filter");
    AGE = selage.value;

    if(AGE == "select one"){
        AGE = "all"
    }

    console.log(AGE);

    // if(AGE == 2000){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].dataset.agemade > 1999){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(AGE == 1900){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].dataset.agemade < 2000){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(AGE == "all"){
    //     for(i = 0; 1 < 7; i++){
    //         if(FIGURES[i].classList == "hide"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
});
selratting.addEventListener("change", function(){
    console.log("change ratting filter");
    RATTING = selratting.value;

    if(RATTING == "select one"){
        RATTING = "all"
    }

    console.log(RATTING);

    // if(RATTING == "pg"){
    //     for(i = 0; i < 7; i++){
    //         if(FIGURES[i].dataset.ratted == "pg-13"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(RATTING == "pg-13"){
    //     for(i = 0; i < 7; i++){
    //         if(FIGURES[i].dataset.ratted == "pg"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
    // if(RATTING == "all"){
    //     for(i = 0; i < 7; i++){
    //         if(FIGURES[i].classList == "hide"){
    //             FIGURES[i].classList.toggle("hide");
    //         }
    //     }
    // }
});
submit.addEventListener("click", function(){
    console.log("submitted");
    for(i = 0; i < 7; i++){
        FIGURES[i].classList.remove("hide");
    }
    if(ANIMATION != "all"){
        if(ANIMATION == "true"){
            for(i = 0; i < 7; i++){
                if(FIGURES[i].dataset.animstion == "f"){
                    FIGURES[i].classList.toggle("hide");
                }
            }
        }
        if(ANIMATION == "false"){
            for(i = 0; i < 7; i++){
                if(FIGURES[i].dataset.animstion == "t"){
                    FIGURES[i].classList.toggle("hide");
                }
            }
        }
    }
    if(AGE == 2000){
        if(AGE == 1900){
            for(i = 0; 1 < 7; i++){
                if(FIGURES[i].dataset.agemade < 2000){
                    FIGURES[i].classList.toggle("hide");
                }
            }
        }
        if(AGE == "all"){
            for(i = 0; 1 < 7; i++){
                if(FIGURES[i].classList == "hide"){
                    FIGURES[i].classList.toggle("hide");
                }
            }
        }
    }
});
*/

filter_select.addEventListener("change", () => {
    FILTER = filter_select.value;
    console.log(FILTER);

    for(i = 0; i < 7; i++){
        if(FIGURES[i].classList == "hide"){
            FIGURES[i].classList.toggle("hide");
        }
    }
    if(RATTING == "pg-13"){
        for(i = 0; i < 7; i++){
            if(FIGURES[i].dataset.ratted == "pg"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(RATTING == "all"){
        for(i = 0; i < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(AGE == 1900){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].dataset.agemade < 2000){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(AGE == "all"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(ANIMATION == "live_action"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].dataset.animstion == "t"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(ANIMATION == "animated"){
        for(i = 0; 1 < 7; i++){
            if(FIGURES[i].classList == "hide"){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
});