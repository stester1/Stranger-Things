function rocketCount() {    
    var julian = 10;
    for (var i = 1; i <= 11; i++){
        if(i == 11){
            setTimeout(function(){

                document.getElementById("Ricky").innerHTML = "GOTCHA!!!";
            }, 1000 * i);
            } else if (i>6) {
                setTimeout(function() {
                    document.getElementById("Ricky").innerHTML =
                    "Vecna is almost here!, time left = " + julian;
                    julian = julian - 1;
                }, 1000 * i);
            } else {
                setTimeout(function(){
                    document.getElementById("Ricky").innerHTML = "the time left is " + julian;
                    julian = julian - 1;
                }, 1000 * i);
            }
        }
}