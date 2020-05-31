
//gets random x & y point to show the mosca
    mosca = document.getElementById("mosca");
    
    
    main();

    function main(){
        height = window.innerHeight;
        width = window.innerWidth;

        randomHeight = Math.round(Math.random() * height)-8;
        randomWidth = Math.round(Math.random() * width)-10;

        mosca.style.right = randomWidth + "px";
        mosca.style.bottom = (randomHeight) + "px";

        mosca.className = 'name' + Math.floor(Math.random()*2)
    }


document.onresize = function(){
    main();
}

mosca.onclick = function(){
    main()
}
//mosca position

//timer section

segundos = 10
 function cronometro(){
    setInterval(() => {
        if (segundos < 0){
            clearInterval(cronometro);
        } else{
            tempo = document.getElementById("timer");
            tempo.innerHTML = `Tempo restante ${segundos} `
            segundos--
        }
    }, 1000);
 }

 cronometro()



