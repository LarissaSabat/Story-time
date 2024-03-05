$(document).ready(function(){
    let inicio=1;
    $("#radio1").prop("checked", true);


    setInterval(function(){
        nextStory();
    },5000);

    function nextStory(){
        inicio++;
        if (inicio >4) {
            inicio=1;
        }

        $("#radio"+ inicio).prop("checked",true);
    }
})