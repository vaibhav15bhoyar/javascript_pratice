let fact=1;
loop:for(let i=1;i<5;i++)
{
    if(i==5){
        continue loop;
    }
    fact=fact*i;
}
console.log(fact);