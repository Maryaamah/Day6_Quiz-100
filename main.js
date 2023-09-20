// Created by maryaamah 

function userEnter(){
    var userName = document.getElementById("textuser").value ;
    document.getElementById("namedisplay").innerHTML = userName ;
    var score = document.getElementById("scorebar").value ;
    document.getElementById("scoreval").innerHTML = score + " " ;
    document.getElementById("failedsc").innerHTML = " " + deaths ;
    $(document).ready(function(){
        $("#username").hide()
        $("#gamestart").show()
        $("#healthval").hide()
        $("#healthval").show(1200)
        $("#firstq").fadeIn(2000)
    });
}
let deaths = 0;
function wrongans(){
     var score = document.getElementById("scorebar").value ;
     var takeaway = Math.round(Math.random() * (31 - 10)) + 10 ;
     var nscore  = score-= takeaway ;
     document.getElementById("scorebar").value = nscore ;
     document.getElementById("scoreval").innerHTML = score + " " ;
     document.getElementById("takescore").innerHTML = " -" + takeaway ;
     var userName = document.getElementById("textuser").value ;
     if (score <= 0){
         $(document).ready(function(){
        $("#username").show();
        $("#gamestart").hide();
        $("#healthval").hide();
        $("#healthval").hide();
        $("#firstq").hide();
        $("#secondq").hide();
        $("#thirdq").hide();
        $("#fourthq").hide();
        $("#fifthq").hide();
        $("#enddiv").hide();
        });
        document.getElementById("textuser").value = userName;
        var score  = document.getElementById("scorebar").value = 100 ;
        document.getElementById("takescore").innerHTML = "";
        alert("YOU failed! TRY AGAIN!");
        deaths+=1;
        document.getElementById("failedsc").innerHTML = " " + failed ;
     }
}
function rightans1() {
    $(document).ready(function(){
        $("#firstq").hide();
        $("#secondq").fadeIn(2000);
    });
}
function rightans2(){
    $(document).ready(function(){
        $("#secondq").hide();
        $("#thirdq").fadeIn(2000)
    });
}
function rightans3(){
    $(document).ready(function(){
        $("#thirdq").hide();
        $("#fourthq").fadeIn(2000);
    });
}
function rightans4(){
    $(document).ready(function(){
        $("#fourthq"). hide();
        $("#fifthq").fadeIn(2000);
    });
}
function rightans5(){
    $(document).ready(function(){
        $("#fifthq").hide();
        $("#enddiv").fadeIn(2000)
    });
    var userName = document.getElementById("textuser").value ;
    var nuserName = userName.toUppercase
 innerHTML = ("CONGRATS ")
}