mosca = document.getElementById("mosca");

var clickCheck = false;
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

        mosca.className = 'name' + Math.floor(Math.random()*2);
}



function cronometro(){
    
    setInterval(() => {
        if (segundos < 0 && life != 0){
            window.location.assign("http://127.0.0.1:5500/html/uWon.html")
        } 
        
        else{
            //simplesmente atualiza o cronometro         
            tempo = document.getElementById("timer");
            tempo.innerHTML = `Tempo restante ${segundos}`
            segundos--
            //simplesmente atualiza o cronometro
                       
           if (contador - segundos === 3 && life != 0){
                    contador = segundos;
                    main()
                    document.getElementById("life-img-" + life).src = "../imagens/coracao_vazio.png"
                    life--
                }      
            if (life === 0){
                window.location.assign("http://127.0.0.1:5500/html/uLost.html")
            }
        }
    } , 1000);
}

cronometro()



