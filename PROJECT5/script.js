function generer(){
    n=document.getElementById('n').value
    if (n.length%2!=0 ){
        alert('n doit etre pair')
        return false
    }
    
    j=0
    k=""
    for(i=0;i<=n.length/2;i=i+1){
        
        
        k=k+String.fromCharCode(n.substr(j,2))
        j=j+2
    }
    alert(k.substr(0,k.length-1))
    return true}

function active(x){
    document.getElementById(x).style.backgroundColor="yellow"
}

function des(x){
    document.getElementById(x).style.backgroundColor="white"
}

function cal(){
    x=document.getElementById('n1').value
    y=document.getElementById('n2').value
    
    n=Math.sqrt(Math.abs((x*x)-(y*y)))
    alert(n)
}
function calc(){
    
    p=document.getElementById('p').value
    r1=document.getElementById('r1')
    r2=document.getElementById('r2')
    r3=document.getElementById('r3')
    res=document.getElementById('res')
   
    if(!r1.checked && !r2.checked && !r3.checked){
        alert('veuiller choisir')
        return false
    }

    if(r1.checked){
        res.value=(r1.value*p)
    }

    if(r2.checked){
        res.value=(r2.value*p)
    }

    if(r3.checked){
        res.value=(r3.value*p)
    }
    return true
}

function calcu(){
    c1=document.getElementById('c1')
    c2=document.getElementById('c2')
    c3=document.getElementById('c3')
    c4=document.getElementById('c4')
    
    k=0;
    c=0;
    
    if(c1.checked){
        k=k+1
        c=c+Number(c1.value)
    }

    if(c2.checked){
        k=k+1
        c=c+Number(c2.value)
    }

    if(c3.checked){
        k=k+1
        c=c+Number(c3.value)
    }

    if(c4.checked){
        k=k+1
        c=c+Number(c4.value)
    }

    if(k==1){
        alert(c)
    }
    else if(k==2){

        alert(c*0.85)
    }
    else{
        alert(0.75*c)
    }
}