function random(){
    let x = Math.random();
    if(x > 0.5){
        document.getElementById("number").innerHTML=Math.floor((Math.random()* 2147483647));
    }
    else{
        document.getElementById("number").innerHTML=Math.floor((Math.random()*2147483647)+(-21474843648));
    }
}