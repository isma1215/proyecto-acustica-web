import cuerda from "./Cuerdas.js";
import { setup,rango } from "./RangoDeVoz.js"

document.addEventListener("DOMContentLoaded",(e)=>{
    setup();
    rango("#rango","#btnFrecActi","#btnFrecDesc");
    cuerda("#cuerda1","#cuerda2","#cuerda3","#cuerda4","#cuerda5","#cuerda6","#cuerdas");
})