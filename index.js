var finalArr = []

function listInsertion(){
    var x = document.getElementById("list")
    if(document.getElementById("myText").value === ""){
        alert("Please enter to list")
        return false
    }else {
        var length = finalArr.length +1
        if(length %3===0){
            finalArr.push("<span style=\"color:red\">" + document.getElementById("myText").value + "</span>");

        }else{
            finalArr.push(document.getElementById("myText").value);

        }
    }
        x.innerHTML = finalArr.join("</br>");
  
}