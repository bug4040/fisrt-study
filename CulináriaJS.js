var reciepe = {
    sugar:0,
    sugarPart:0,
    wheat:0,
    wheatPart:0,
    eggs:0,
    time,
    oven:false
}
var forno = {
    aquecido:false,
    temp:0,
    timeMinute:0,
    timeHour:0,
    timeAbsolute:timeMinute+timeHour*60
}
const brownie = {
    sugar:2,
    wheat:2.25,
    eggs:3,
    temp:180,
    oven:true,
    timeMin:45,
    timeMax:55,
}
sugar.onclick = function(){
    reciepe.sugar +=1;
    if(reciepe.sugarPart >= 4){
        reciepe.sugar+=1;
        reciepe.sugarPart-=4;
    }
    if (reciepe.sugarPart % 2 ==0){
        if(reciepe.sugarPart%4 ==0){
            document.getElementById("countSugar").innerHTML = reciepe.sugar;
        }else{
            var sugarString = reciepe.sugar.toString() + " 1/2";
            document.getElementById("countSugar").innerHTML= sugarString;
        };
    }
    else{
        var sugarString = reciepe.sugar.toString() + " " + reciepe.sugarPart + "/4";
        document.getElementById("countSugar").innerHTML = sugarString;
    };
};
sugar05.onclick = function(){
    reciepe.sugarPart += 2;
    if(reciepe.sugarPart >= 4){
        reciepe.sugar+=1;
        reciepe.sugarPart-=4;
    }
    if (reciepe.sugarPart % 2 ==0){
        if(reciepe.sugarPart%4 ==0){
            document.getElementById("countSugar").innerHTML = reciepe.sugar;
        }else{
            var sugarString = reciepe.sugar.toString() + " 1/2";
            document.getElementById("countSugar").innerHTML= sugarString;
        };
    }
    else{
        var sugarString = reciepe.sugar.toString() + " " + reciepe.sugarPart + "/4";
        document.getElementById("countSugar").innerHTML = sugarString;
    };
};
sugar025.onclick = function(){
    reciepe.sugarPart += 1;
    if(reciepe.sugarPart >= 4){
        reciepe.sugar+=1;
        reciepe.sugarPart-=4;
    }
    if (reciepe.sugarPart % 2 ==0){
        if(reciepe.sugarPart%4 ==0){
            document.getElementById("countSugar").innerHTML = reciepe.sugar;
        }else{
            var sugarString = reciepe.sugar.toString() + " 1/2";
            document.getElementById("countSugar").innerHTML= sugarString;
        };
    }
    else{
        var sugarString = reciepe.sugar.toString() + " " + reciepe.sugarPart + "/4";
        document.getElementById("countSugar").innerHTML = sugarString;
    };
};
sugarZero.onclick = function(){
    reciepe.sugar = 0;
    document.getElementById("countSugar").innerHTML = reciepe.sugar;
};
wheat.onclick = function(){
    reciepe.wheat +=1;
    if(reciepe.wheatPart >= 4){
        reciepe.wheat+=1;
        reciepe.wheatPart-=4;
    }
    if (reciepe.wheatPart % 2 ==0){
        if(reciepe.wheatPart%4 ==0){
            document.getElementById("countWheat").innerHTML = reciepe.wheat;
        }else{
            var wheatString = reciepe.wheat.toString() + " 1/2";
            document.getElementById("countWheat").innerHTML= wheatString;
        };
    }
    else{
        var wheatString = reciepe.wheat.toString() + " " + reciepe.wheatPart + "/4";
        document.getElementById("countWheat").innerHTML = wheatString;
    };
};
wheat05.onclick = function(){
    reciepe.wheatPart += 2;
    if(reciepe.wheatPart >= 4){
        reciepe.wheat+=1;
        reciepe.wheatPart-=4;
    }
    if (reciepe.wheatPart % 2 ==0){
        if(reciepe.wheatPart%4 ==0){
            document.getElementById("countWheat").innerHTML = reciepe.wheat;
        }else{
            var wheatString = reciepe.wheat.toString() + " 1/2";
            document.getElementById("countWheat").innerHTML= wheatString;
        };
    }
    else{
        var wheatString = reciepe.wheat.toString() + " " + reciepe.wheatPart + "/4";
        document.getElementById("countWheat").innerHTML = wheatString;
    };
};
wheat025.onclick = function(){
    reciepe.wheatPart += 1;
    if(reciepe.wheatPart >= 4){
        reciepe.wheat+=1;
        reciepe.wheatPart-=4;
    }
    if (reciepe.wheatPart % 2 ==0){
        if(reciepe.wheatPart%4 ==0){
            document.getElementById("countWheat").innerHTML = reciepe.wheat;
        }else{
            var wheatString = reciepe.wheat.toString() + " 1/2";
            document.getElementById("countWheat").innerHTML= wheatString;
        };
    }
    else{
        var wheatString = reciepe.wheat.toString() + " " + reciepe.wheatPart + "/4";
        document.getElementById("countWheat").innerHTML = wheatString;
    };
};

wheatZero.onclick = function(){
    reciepe.wheat = 0;
    document.getElementById("countWheat").innerHTML = reciepe.wheat;
};
eggs.onclick = function(){
    reciepe.eggs +=1;
    document.getElementById("countEggs").innerHTML = reciepe.eggs;
};
eggsZero.onclick = function(){
    reciepe.eggs = 0;
    document.getElementById("countEggs").innerHTML = reciepe.eggs;
};
graus160.onclick = function(){
    forno.temp = 160;
    document.getElementById("temperatura").innerHTML = forno.temp +"°C";
};
graus180.onclick = function(){
    forno.temp = 180;
    document.getElementById("temperatura").innerHTML = forno.temp +"°C";
};
graus210.onclick = function(){
    forno.temp = 210;
    document.getElementById("temperatura").innerHTML = forno.temp +"°C";
};
graus240.onclick = function(){
    forno.temp = 240;
    document.getElementById("temperatura").innerHTML = forno.temp +"°C";
};
graus270.onclick = function(){
    forno.temp = 270;
    document.getElementById("temperatura").innerHTML = forno.temp +"°C";
};
preHeat.onclick = function(){
    if(forno.temp >=65){
        if(forno.aquecido == false){
            if(forno.time >=5){
                forno.aquecido = true;
                document.getElementById("heat").innerHTML = "sim"
            }else{
                document.getElementById("heat").innerHTML = "pouco tempo para esquentar!";
            }
        }else{
            document.getElementById("heat").innerHTML = "o forno já está aquecido!";
        }
    }else{
        document.getElementById("heat").innerHTML = "temperatura muito baixa para coxinhar algo!";
    }
};

cold.onclick = function(){
    forno.aquecido = false;
    forno.temp = 0
    document.getElementById("heat").innerHTML = "não"
    document.getElementById("temperatura").innerHTML = forno.temp;
};
cook.onclick = function(){
    if(reciepe.eggs == 0){
        if(reciepe.sugar == 0){
            if(reciepe.sugarPart == 0){
                if(reciepe.wheat==0){
                    if(reciepe.wheatPart==0){
                        document.getElementById("cozido").innerHTML = "não há ingredientes nessa receita =(.";
                    }
                }
            }
        }
    }else{
        if(forno.aquecido == true){
            reciepe.oven = true;
            reciepe.time = forno.timeAbsolute;
        }
    }
};
