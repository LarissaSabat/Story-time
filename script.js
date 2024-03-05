let inicio=1;
document.getElementById("radio1").checked=true;

setInterval(function(){
    proxTrecho();
}, 5000)

function proxTrecho(){
    inicio++;
    if (inicio>4){
        inicio=1;
    }
    
    document.getElementById("radio"+inicio).checked=true;
}
