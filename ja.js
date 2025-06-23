let p=document.querySelector('.p');
let r=document.querySelector('.r');
let s=document.querySelector('.s');
let my=document.querySelector('.my');
let com=document.querySelector('.cm');
btn=document.querySelector('Button');
let count=0
let loss=0
let rock=1
let vi=1

r.addEventListener('click',function(){
    ran=Math.floor(Math.random()*3)
    if(ran==rock){
        p.innerHTML="Draw Match"
    }
    
    else if(ran>rock){
        btn.innerHTML="you loss"
       loss++
       com.innerHTML=loss
       vi=vi-0.1
       btn.style.opacity=vi
       
    }
    else if(ran<rock){
       btn.innerHTML="you win"
       count++
       vi=vi+0.1
       btn.style.opacity=vi
       my.innerHTML=count
       
    }

    
})
p.addEventListener('click',function(){
    ran=Math.floor(Math.random()*3)
    if(ran==rock){
        p.innerHTML="Draw Match"
    }
    
    else if(ran>rock){
        btn.innerHTML="you loss"
       loss++
       vi=vi-0.1
       btn.style.opacity=vi
       com.innerHTML=loss
       
    }
    else if(ran<rock){
       btn.innerHTML="you win"
       count++
       vi=vi+0.1
       btn.style.opacity=vi
       my.innerHTML=count
       
    }
    
})
s.addEventListener('click',function(){
    ran=Math.floor(Math.random()*3)
    if(ran==rock){
        p.innerHTML="Draw Match"
    }
    
    else if(ran>rock){
        btn.innerHTML="you loss"
       loss++
       vi=vi-0.1
       btn.style.opacity=vi
       com.innerHTML=loss
       
    }
    else if(ran<rock){
       btn.innerHTML="you win"
       count++
       vi=vi+0.1
       btn.style.opacity=vi
       my.innerHTML=count
       
    }

    
})