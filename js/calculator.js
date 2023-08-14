let sum = 0;
document.getElementById("add").addEventListener("click", function(){
   sum+=1;
    document.getElementById("sum").innerText = sum;
})
document.getElementById("sub").addEventListener("click", function(){
    sum-=1;
    document.getElementById("sum").innerText = sum;
})