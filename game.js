p1=localStorage.getItem("player1name");
p2=localStorage.getItem("player2name");

s1=0;
s2=0;

document.getElementById("p1na").innerHTML=p1+": "
document.getElementById("p2na").innerHTML=p2+": "
document.getElementById("p1s").innerHTML=s1
document.getElementById("p2s").innerHTML=s2
document.getElementById("pa").innerHTML="answers turn : "+p2
document.getElementById("pq").innerHTML="question turn : "+p1

function send(){
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x"+ number2 +"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    }
    
  qt="pl1";
  at="pl2" ;
  
  function check(){
    getans=document.getElementById("input_check_box"). value;
    if(getans==actual_answer){
if(at=="pl1"){
s1=s1+1;
document.getElementById("p1s").innerHTML=s1;



}
else{
s2=s2+1
document.getElementById("p2s").innerHTML=s2


}



    }
if(qt=="pl1"){
    qt="pl2"
    document.getElementById("pq").innerHTML="question turn : " + p2;

}
else{ qt="pl1"
document.getElementById("pq").innerHTML="question turn : " + p1;}
  
if(at=="pl1"){
    at="pl2"
    document.getElementById("pa").innerHTML="answer turn : " + p2;

}
else{ at="pl1"
document.getElementById("pa").innerHTML="answer turn : " + p1;}
























  }
