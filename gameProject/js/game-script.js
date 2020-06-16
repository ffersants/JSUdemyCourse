mosca = document.getElementById("mosca");

levelParameter = window.location.href
switch(levelParameter) {
    case "file:///C:/Users/DheyEs/Documents/udemy/Javascript/Udemy%20Course/gameProject/html/playing.html?level=easy" :
       var level = 5
    break;

    case "file:///C:/Users/DheyEs/Documents/udemy/Javascript/Udemy%20Course/gameProject/html/playing.html?level=medium":
        var level = 3
    break;

    case "file:///C:/Users/DheyEs/Documents/udemy/Javascript/Udemy%20Course/gameProject/html/playing.html?level=hard" :
       var level = 2
    break;
}

var life = 3
var segundos = 30;
var contador = segundos;
//gets random x & y point to show the mosca

mosca.onclick = () => { 
    main() 
    contador = segundos;
}

function main(){
        height = window.innerHeight;
        width = window.innerWidth;

        randomHeight = Math.round(Math.random() * height)-8;
        randomWidth = Math.round(Math.random() * width)-10;

        mosca.style.right = randomWidth + "px";
        mosca.style.bottom = randomHeight + "px";

        mosca.className = 'name' + Math.floor(Math.random()*3);
}

function cronometro(){
    setInterval(() => {
        if (segundos < 0 && life != 0){
            window.location.assign("../html/uWon.html")
        } 
        
        else{
            //simplesmente atualiza o cronometro         
            tempo = document.getElementById("timer");
            tempo.innerHTML = `Tempo restante ${segundos}`
            segundos--
            //simplesmente atualiza o cronometro
                       
           if (contador - segundos === level && life != 0){
                    contador = segundos;
                    main()
                    document.getElementById("life-img-" + life).src = "../imagens/coracao_vazio.png"
                    life--
                }      
            if (life === 0){
                window.location.assign("../html/uLost.html")
            }
        }
    } , 1000);
}

cronometro()



