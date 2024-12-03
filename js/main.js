function validate(){
    var doller = document.getElementById('doller').value;
    var result = document.getElementById('result');

    // result.innerHTML = doller*50;
    // return false;

    if(doller==""){
        result.innerHTML = "Please Enter Data";
        return false;
    }
    else if(isNaN(doller)){
        result.innerHTML = "Please Enter Number Not Text";
        return false;
    }
    else if(doller<0){
        result.innerHTML = "Please Enter Positive Number";
        return false;
    }
    else if(doller==0){
        result.innerHTML = "Please Enter Number Rather than Zero";
        return false;
    }
    else{
        result.innerHTML = doller*50 + "  " + "Egyption pound";
        return false;
    }
}