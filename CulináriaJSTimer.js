time1.onclick = function(){
    forno.timeMinute+=1;
    if(forno.timeMinute>=60){
        forno.timeHour+=1;
        forno.timeMinute-=60;
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time5.onclick = function(){
    forno.timeMinute+=5;
    if(forno.timeMinute>=60){
        forno.timeHour+=1;
        forno.timeMinute-=60;
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time10.onclick = function(){
    forno.timeMinute+=10;
    if(forno.timeMinute>=60){
        forno.timeHour+=1;
        forno.timeMinute-=60;
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }


    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time20.onclick = function(){
    forno.timeMinute+=20;
    if(forno.timeMinute>=60){
        forno.timeHour+=1;
        forno.timeMinute-=60;
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }


    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time30.onclick = function(){
    forno.timeMinute+=30;
    if(forno.timeMinute>=60){
        fornoreciepe.timeHour+=1;
        forno.timeMinute-=60;
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }


    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time1m.onclick = function(){
    forno.timeMinute-=1;
    if(forno.timeMinute<0){
        if(forno.timeHour>0){
            forno.timeMinute+=60;
            forno.timeHour-=1;
        }
        else{
            forno.timeMinute = 0;
        }
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time5m.onclick = function(){
    forno.timeMinute-=5;
    if(forno.timeMinute<0){
        if(forno.timeHour>0){
            forno.timeMinute+=60;
            forno.timeHour-=1;
        }
        else{
            forno.timeMinute = 0;
        }
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time10m.onclick = function(){
    forno.timeMinute-=10;
    if(forno.timeMinute<0){
        if(forno.timeHour>0){
            forno.timeMinute+=60;
            forno.timeHour-=1;
        }
        else{
            forno.timeMinute = 0;
        }
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time20m.onclick = function(){
    forno.timeMinute-=20;
    if(forno.timeMinute<0){
        if(forno.timeHour>0){
            forno.timeMinute+=60;
            forno.timeHour-=1;
        }
        else{
            forno.timeMinute = 0;
        }
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};
time30m.onclick = function(){
    forno.timeMinute-=30;
    if(forno.timeMinute<0){
        if(forno.timeHour>0){
            forno.timeMinute+=60;
            forno.timeHour-=1;
        }
        else{
            forno.timeMinute = 0;
        }
    }
    var timeMinuteString = null;
    if (forno.timeMinute<10){
        var timeMinuteString = "0" + forno.timeMinute.toString() + "min";
    }else{
        timeMinuteString = forno.timeMinute.toString() + "min";
    }

    if(forno.timeHour<=0){
        document.getElementById("tempoHTML").innerHTML = timeMinuteString;
    }else{
        document.getElementById("tempoHTML").innerHTML = forno.timeHour.toString()+"h"+ timeMinuteString;
    }
};