let gameNum=25;
let userNum=prompt("guess the number");

while(gameNum!=userNum){
     prompt("you entered wrong no.");
     userNum=prompt("re-guess");
}
prompt("congratulation")