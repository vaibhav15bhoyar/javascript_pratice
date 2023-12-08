
let sum=0;
loop :for(let i=1;i<=10;i++){
    if(i==5){
        break loop;
    }
    console.log(i);
    sum=sum+i;
}
console.log("sum="+sum);