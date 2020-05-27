
//gets random x & y point to show the mosca
    mosca = document.getElementById("mosca");
    
    main();

    function main(){
        height = window.innerHeight;
        width = window.innerWidth;

        randomHeight = Math.round(Math.random() * height);
        randomWidth = Math.round(Math.random() * width);

        mosca.style.right = randomWidth + "px";
        mosca.style.bottom = (randomHeight) + "px";
    }


document.onresize = function(){
    main();
}

mosca.onclick = function(){
    main()
}






