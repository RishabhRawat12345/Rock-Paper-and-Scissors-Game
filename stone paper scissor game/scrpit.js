let btn1=document.querySelector('.conatiner1');
let btn2=document.querySelector('.conatiner2');
let btn3=document.querySelector('.conatiner3');
const choices = ["./images/first.png", "./images/hand.png", "./images/peace.png"];
let ans=document.querySelector('#start');
let count=0;
let losses=0;
let win=document.querySelector('.sco1');
let lose=document.querySelector('.sco2');

btn1.addEventListener('click',()=>{
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    const selectedChoice = choices[randomChoiceIndex];
    if(selectedChoice===choices[0]){
        if(count===4 && losses===4){
            ans.innerText='Draw'; 
        }
    }
    else if(selectedChoice===choices[1]){
        count++;
        if(count===4){
         ans.innerText='Youwin';
        }
       
        win.innerText= `Player:${count}`;
    }
    else{
        losses++;
        if(losses===4){
            ans.innerHTML='youlose';
        }
       lose.innerText=`Computer:${losses}`;
    }
      
   

})
btn2.addEventListener('click',()=>{
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    const selectedChoice = choices[randomChoiceIndex];
    if(selectedChoice===choices[1]){
        if(count===4 && losses===4){
            ans.innerText='Draw'; 
        }  
    }
    else if(selectedChoice===choices[0]){
        count++;
        if(count===4){
            ans.innerText='Youwin';
        }
        win.innerText=`Player:${count}`;

    }
    else{
        losses++;
        if(losses===4){
            ans.innerHTML='youlose';
        }
        lose.innerText=`Computer:${losses}`;
    }
   
})
btn3.addEventListener('click',()=>{
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    const selectedChoice = choices[randomChoiceIndex];
    if(selectedChoice===choices[0]){
        losses++;
        if(losses===4){
            ans.innerHTML='youlose';
        }
        lose.innerText=`Computer:${losses}`;
    }
    else if(selectedChoice===choices[1]){
        count++;
        if(count==4){
            ans.innerText='Youwin';
        }
        win.innerText=`Player:${count}`;

    }
    else{
        if(count===4 && losses===4){
            ans.innerText='Draw'; 
        }
        
    }
    
})
