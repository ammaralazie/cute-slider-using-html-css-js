var counter=1;

setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    console.log(counter);
    if(counter>4){
        counter=1;
    }
},10000)
