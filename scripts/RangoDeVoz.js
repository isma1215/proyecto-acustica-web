let audioContext;
let pitch;
let mic;
let $frecuencia,$AfinadorFrec;
let frec;
let seg=10;
let agudo=100;
let grabe=300;
let tempoFrec;
export async function setup(){
    $frecuencia=document.querySelector("#frecuencia");
    $AfinadorFrec=document.querySelector("#AfinadorFrec")
    audioContext= new AudioContext;
    mic=await navigator.mediaDevices.getUserMedia({audio:true,video:false});  
}

export function rango(btnrango,btnActFrec,btnDesacFrec){
    document.addEventListener("click",(e)=>{
        if(e.target.matches(`${btnrango}`)){
        e.target.disabled=true;
        Detection();
        }
        if(e.target.matches(`${btnActFrec}`)){
            e.target.disabled=true;
            document.querySelector(btnDesacFrec).disabled=false;
            ActvFrecuenciometro();
        }
        if(e.target.matches(`${btnDesacFrec}`)){
            e.target.disabled=true;
            document.querySelector(btnActFrec).disabled=false;
            clearInterval(tempoFrec);
            $AfinadorFrec.innerHTML=`0.00 Hz`

        }
    })
}

function ActvFrecuenciometro(){
    audioContext.resume();
    pitch=ml5.pitchDetection(
        '/model/',
        audioContext,
        mic,
        modelLoaded);
    tempoFrec = setInterval(()=>{pitch.getPitch(frecuenciometro)},50);
}

function Detection(){
    audioContext.resume();
    pitch=ml5.pitchDetection(
        '/model/',
        audioContext,
        mic,
        modelLoaded);

    let tempo = setInterval(() => {
       if(seg==0){
        document.querySelector("#dialogo").innerHTML=`<h2>Su rango al hablar es ${grabe.toFixed(2)} Hz a ${agudo.toFixed(2)} Hz<h2>`;
           restaurar();
           clearInterval(tempo);
       }
       else if(seg<=5){             
         document.querySelector("#conta").innerHTML=`${seg.toFixed(0)}`;
         seg-=0.5;
         pitch.getPitch(gotPitch);
         rangoalto();
       }
       else{
        document.querySelector("#conta").innerHTML=`${seg.toFixed(0)}`;
        seg-=0.5;
        pitch.getPitch(gotPitch);
        rangobajo();
       }
    }, 500);    
}
function rangobajo(){
       document.querySelector("#dialogo").innerHTML=`<h2>Pronuncie la letra O continuamente por 5 segundos
       <h2>`; 
       if(grabe>frec) {grabe=frec}
}
function rangoalto(){
    document.querySelector("#dialogo").innerHTML=
    `<h2>Ahora la letra I por unos 5 segundos 
       <h2>`; 
    if(agudo<frec) {agudo=frec}
}
function frecuenciometro(err,frequency){
    if(err){
        console.error(err);
    }else{
        frequency>65? ($AfinadorFrec.innerHTML=`${frequency.toFixed(2)} Hz`):($AfinadorFrec.innerHTML=`0.00 Hz`);
    }
}
function gotPitch(err, frequency ){
    if(err){
        console.error(err);
    }else{
        frequency>65? ($frecuencia.innerHTML=`${frequency.toFixed(2)} Hz`,frec=frequency):($frecuencia.innerHTML=`0.00 Hz`);
    }
}

function modelLoaded(){
    console.log("model loaded");
}
function restaurar(){
    document.querySelector("#conta").innerHTML=`0`;
    document.querySelector("#frecuencia").innerHTML=`0.00 Hz`;
    document.getElementById("rango").disabled=false;
    seg=10;
    frec=0;
}