window.addEventListener('load',quote);
function quote(){
    const arr = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela","The way to get started is to quit talking and begin doing. -Walt Disney","The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"]
    const brr = ['g','b','o','y'];
    let x = Math.floor(Math.random()*arr.length);
    let y = Math.floor(Math.random()*brr.length);
    document.getElementById('q').innerHTML = arr[x];
    document.getElementById('q').classList.add(brr[y]);
}
function kalar(x){;
    document.getElementById('q').classList.remove(document.getElementById('q').classList);
    document.getElementById('q').classList.add(x);
}
function convert(){
    let x = document.getElementById("conv_num").value;
    if(document.getElementById('conv').value=="lb") document.getElementById('res').innerHTML = x*2.20462 + " lb";
    else document.getElementById('res').innerHTML = x*0.453592 + " kg";
}
document.getElementById('arr').addEventListener('input',arrx);
function arrx(){
    let z = document.getElementById('arr').value;
    if (z.charAt(z.length - 1) == ','){
        if (z.charAt(z.length - 2) == ',') z = z.slice(0,-2) + z.slice(-1);
        return;
    } 
    let x = z.split(',').map(function(y){
        return parseInt(y.trim());
    });
    document.getElementById('max').innerHTML = Math.max(...x);
    document.getElementById('min').innerHTML = Math.min(...x);
    let total = 0;
    x.forEach(function(y){
        total+=y;
    });
    document.getElementById('sum').innerHTML = total;
    document.getElementById('rev').innerHTML = x.reverse();
}
function c(){
    document.getElementById("mag").value="";
}
function C(){
    if (document.getElementById("mag").value==document.getElementById("mag").value.toUpperCase()) document.getElementById("mag").value=document.getElementById("mag").value.toLowerCase();
    else document.getElementById("mag").value=document.getElementById("mag").value.toUpperCase();
}
function s(){
    let x = document.getElementById("mag").value.split('\n');
    let y = x.map(y =>{
        return y.split('').sort().join('');
    });
    document.getElementById("mag").value="";
    y.forEach(function(q){
        document.getElementById("mag").value+=q+"\n";
    })
    document.getElementById("mag").value=document.getElementById("mag").value.trim();
}
function r(){
    let x = document.getElementById("mag").value.split('\n').reverse();
    document.getElementById("mag").value="";
    x.forEach(function(q){
        document.getElementById("mag").value+=q+"\n";
    })
    document.getElementById("mag").value=document.getElementById("mag").value.trim();
}
function a(){
    document.getElementById("mag").value=document.getElementById("mag").value.trim();
    let x = document.getElementById("mag").value.split('\n');
    document.getElementById("mag").value="";
    let c=1;
    for (let i=0;i<x.length-1;i++){
        document.getElementById("mag").value+=c+'. '+x[i]+"\n";
        c++;
    }
    document.getElementById("mag").value+=c+'. '+x[x.length-1];
}
function S(){
    let x = document.getElementById("mag").value.trimEnd().split('\n');
    
    document.getElementById("mag").value="";
    let x1 = Math.floor(Math.random()*x.length), x2 = Math.floor(Math.random()*x.length);
    
    let l = Math.min(x1,x2), r = Math.max(x1,x2);
    for (let i=0;i<l;i++) document.getElementById("mag").value+=x[i]+"\n";
    for (let i=r;i<x.length;i++) document.getElementById("mag").value+=x[i]+"\n";
    for (let i=l;i<r;i++) document.getElementById("mag").value+=x[i]+"\n";
}
function St(){
    document.getElementById("mag").value=document.getElementById("mag").value.trim();
    let x = document.getElementById("mag").value.trimEnd().split('\n');
    document.getElementById("mag").value='';
    for (let i=0;i<x.length;i++){
        if (x[i].length>0) document.getElementById("mag").value+=x[i].trim()+"\n";
    }
}