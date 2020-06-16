var select = document.getElementById("select");

var start = document.getElementById("start")


start.onclick = () => { 
    var level = select.options[select.selectedIndex].text;
    //location.assign("C:/Users/DheyEs/Documents/udemy/Javascript/Udemy Course/gameProject/html/playing.html")
    
    level === "Médio" ? level = 'medium' : level === "Fácil" ? level = 'easy' : level === "Difícil" ? level = "hard" : false 

    window.location.assign(`C:/Users/DheyEs/Documents/udemy/Javascript/Udemy Course/gameProject/html/playing.html?level=${level}`)
}

