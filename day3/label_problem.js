loop:for(let i=0;i<=5;i++)
{
    loop2:for(let j=0;j<=5;j++)
    {
        if(i==j)
        {
            continue loop;
        }
        console.log(`i = ${i} , j= ${j}`);
        
    }
}