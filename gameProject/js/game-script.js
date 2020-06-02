var clickCheck = false;
var life = 3
//gets random x & y point to show the mosca
    mosca = document.getElementById("mosca");

function main(){
        height = window.innerHeight;
        width = window.innerWidth;

        randomHeight = Math.round(Math.random() * height)-8;
        randomWidth = Math.round(Math.random() * width)-10;

        mosca.style.right = randomWidth + "px";
        mosca.style.bottom = (randomHeight) + "px";

        mosca.className = 'name' + Math.floor(Math.random()*2);
}



segundos = 30;
contador = segundos;

function cronometro(){
    
    setInterval(() => {
        if (segundos < 0){
            clearInterval(cronometro);
        } 
        
        else{
            //simplesmente atualiza o cronometro         
            tempo = document.getElementById("timer");
            tempo.innerHTML = `Tempo restante ${segundos}`
            segundos--
            //simplesmente atualiza o cronometro
           
            mosca.onclick = function (){
                main() 
                contador = segundos;
            }
            
           if (contador - segundos === 3){
                    contador = segundos;
                    main()
                    document.getElementById("life-img-" + life).src = "../imagens/coracao_vazio.png"
                    life--
                }
        }
    } , 1000);
}

cronometro()
