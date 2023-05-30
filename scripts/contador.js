let seg,$conta;

export function contador(segundos,conta){
    seg=segundos;
    $conta=document.querySelector(conta);
    actualizar();    
}


function actualizar(){
    $conta.innerHTML=seg;

    if(seg==0)
        $conta.innerHTML="fin del conteo";
    else{
        seg--;
        setTimeout(actualizar,1000);
    }

}

 
