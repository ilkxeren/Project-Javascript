$("#myText").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

var count = 1
$("#myButton").click(function() {
    if(count % 3 === 0){
        $("div").append("<span style='color:red'>" + myText.value + "</span></br>")
    }else{
        $("div").append(myText.value + "</br>");
    }
    count++
});

