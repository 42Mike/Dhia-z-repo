function ver(){
    n=document.getElementById('n').value;
    d=document.getElementById('d');
    
    prod=document.getElementById('prod');
    opt=prod.options[prod.selectedIndex].text;
    
    q=document.getElementById('q').value;

    fd=document.getElementById('fd');
    fc=document.getElementById('fc');
    fn=document.getElementById('fn');
    fprod=document.getElementById('fprod');
    fprix=document.getElementById('fprix');
    fq=document.getElementById('fq');
    res=document.getElementById('res');

    if(n.indexOf(" ")!=n.lastIndexOf(" ") || n.indexOf(" ")==-1){
        alert('invalide');return false
    }
    da=new Date()
    j=da.getDate()
    if(j<10){j="0"+j}

    
    m=da.getMonth()
    m+=1
    if(m<10){m="0"+m}
    
    d.value=(j+"/"+m+"/"+da.getFullYear())

    if(prod.value==0){
        alert("veuiller choisir un produit");return false
    }

    fd.value=(j+"/"+m+"/"+da.getFullYear())
    fc.value=(n.substr(0,2)+n.substr(n.length-2,2)+"/"+n.length)
    fn.value=n
    fprod.value=opt
    fprix.value=prod.value
    fq.value=q
    res.value=q*prod.value
    


    
}

