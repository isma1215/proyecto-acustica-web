let audioContext;
let stream;
let pitch;
   
   

async function setup() {
  stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  startPitch(stream, audioContext);
}


function startPitch(stream, audioContext) {
  pitch = ml5.pitchDetection('./model/', audioContext , stream, modelLoaded);
}

function modelLoaded() {
  document.querySelector('#status').textContent='Model Loaded';
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if(frequency<=100){
        document.querySelector('#result').innerHTML=0;
    }
    else  
    document.querySelector('#result').innerHTML=frequency;
    getPitch();
  })
}