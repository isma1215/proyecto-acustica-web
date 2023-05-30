const d=document,
$ball=d.querySelector(".ball"),
$stage=d.querySelector(".stage");
let x=0,y=0;
limitball= $ball.getBoundingClientRect(),
limitstage = $stage.getBoundingClientRect();

if(annyang){
    const commands={
        "left":()=>{
            x--;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "right":()=>{
            x++;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "down":()=>{
            y++;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "up":()=>{
            y--;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "pink":()=>{
            $ball.style.background = "pink";
        },
        "green":()=>{
            $ball.style.background = "#158a0b";
        },
        "red":()=>{
            $ball.style.background = "red";
        },
        "blue":()=>{
            $ball.style.background = "blue";
        },
        "izquierda":()=>{
            x--;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "derecha":()=>{
            x++;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "abajo":()=>{
            y++;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "arriba":()=>{
            y--;
            $ball.style.transform = `translate(${x*20}px,${y*20}px)`;
        },
        "rosa":()=>{
            $ball.style.background = "pink";
        },
        "verde":()=>{
            $ball.style.background = "#158a0b";
        },
        "rojo":()=>{
            $ball.style.background = "red";
        },
        "azul":()=>{
            $ball.style.background = "blue";
        },
    
    



    };
annyang.addCommands(commands);

annyang.start({autoRestart:false,continuous:true});    
}

 
