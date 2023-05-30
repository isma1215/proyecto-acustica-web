export default function cuerda(uno,dos,tres,cuatro,cinco,seis,cuerdas){
    const $cuerdas = document.querySelector(cuerdas);
    document.addEventListener("click",(e)=>{
        if(e.target.matches(`${uno}`)){
            $cuerdas.innerHTML=`La primer cuerda se afina a 329.62 HZ un tono de E4(Mi) `;
            }
        if(e.target.matches(`${dos}`)){
            $cuerdas.innerHTML=`La segunda cuerda se afina a 246.94 HZ un tono de B3(Si) `;
        }
        if(e.target.matches(`${tres}`)){
            $cuerdas.innerHTML=`La tercera cuerda se afina a 195.99 HZ un tono de G3(Sol) `;
            }    
        if(e.target.matches(`${cuatro}`)){
            $cuerdas.innerHTML=`La cuarta cuerda se afina a 146.83 HZ un tono de D3(Re) `;
            }
        if(e.target.matches(`${cinco}`)){
            $cuerdas.innerHTML=`La quinta cuerda se afina a 110.00 HZ un tono de A2(La) `;
            }    
        if(e.target.matches(`${seis}`)){
            $cuerdas.innerHTML=`La sexta cuerda Se afina a 82.30 HZ un tono de E2(Mi) `; 
            }


    })
}