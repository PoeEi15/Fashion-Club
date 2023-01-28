const sm=document.getElementById("number1")
const bm=document.getElementById("number2")
const wm=document.getElementById('number3')
const hm=document.getElementById("number4")
const c3=document.getElementById("choose3")
const c7=document.getElementById("choose7")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const Upanswer=document.getElementById("sizePrint1")
const LAnswer=document.getElementById("sizePrint2")
btn1.addEventListener("click",()=>{
    
    if (sm.value>18){
        x=3
    }
    else if (sm.value>=16){
        x=2
    }
    else{
        x=1
    }
    
    if (bm.value>38){
        y=3
    }
    else if (bm.value>=36){
        y=2
    }
    else{
        y=1
    }
    if (x>=y){
        z="S"
    }
    else{
        z="B"
    }
    if (z=="S"){
        if (x<=1){
            c3.classList.add("positive")
            Upanswer.textContent=" 'S' size"
        }
        else if (x==2){
            c3.classList.add("positive")
            Upanswer.textContent=" 'M'  Size"
        }
        else if (x==3){
            c3.classList.add("positive")
            Upanswer.textContent="'L' Size"
        }
    }
    else if (z=="B"){
        if (y<=1){
            c3.classList.add("positive")
            Upanswer.textContent=" 'S' size"
        }
        else if (y==2){
            c3.classList.add("positive")
            Upanswer.textContent="'M' Size"
        }
        else if (y==3){
            c3.classList.add("positive")
            Upanswer.textContent="'L' Size"
        }
    }
    })
btn2.addEventListener("click",()=>{
    if (wm.value>36){
        a=3
    }
    else if (wm.value>=34){
        a=2
    }
    else {
        a=1
    }
    if (hm.value>40){
        b=3
    }
    else if (hm.value>=38){
        b=2
    }
    else {
        b=1
    }
    if (a>=b){
        c="W"
    }
    else{
        c="H"
    }
    if (c=="W"){
        if (a<=1){
            c7.classList.add("positive")
            LAnswer.textContent="'S' size"
        }
        else if (a=2){
            c7.classList.add("positive")
            LAnswer.textContent="'M' size"
        }
        else if (a==3){
            c7.classList.add("positive")
            LAnswer.textContent="'L' size"
        }
    }
    else if(c=="H"){
        if (b<=1){
            c7.classList.add("positive")
            LAnswer.textContent="'S' size"
        }
        if (b==2){
            c7.classList.add("positive")
            LAnswer.textContent="'M' size"
        }
        if (b==3){
            c7.classList.add("positive")
            LAnswer.textContent="'L' size"
        }

    }
        
    })