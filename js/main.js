import { data } from "./preguntas.js";

var preguntaAletoria;
var nivel = 0;

const contenedor = document.querySelector(".contenedor");
const contEncabezado = document.createElement("div");
const contJugador = document.createElement("div")
const contJugParrafo = document.createElement("h3")
const contJugInput = document.createElement("input");
const contJugbtn = document.createElement("div");
const contPregunta = document.createElement("div");
const contPreParrafo = document.createElement("H3");
const contCategoria = document.createElement("div");
const contCatParrafo = document.createElement("H4");
const contNivel = document.createElement("div");
const contNivelParrafo = document.createElement("H4");

contEncabezado.className = "encabezado";
contEncabezado.id = "encabezado";

contPregunta.className = "pregunta";
contPregunta.id = "pregunta"

contCategoria.className = "categoria";
contCategoria.id = "categoria";

contNivel.className = "nivel";
contNivel.id = "nivel";

contJugador.className = "jugador_div";
contJugador.id = "jugador_div";
contJugInput.className = "jugador_input";
contJugInput.id = "jugador_input";
contJugInput.required = 'true';
contJugbtn.className = "btn";
contJugbtn.id = "jugador_btn";

contPreParrafo.textContent = "Daniel Salinas Pinedo";

contJugParrafo.textContent = "Ingrese usuario"
contJugbtn.textContent = "Ingrese";

contJugador.append(contJugParrafo)
contJugador.append(contJugInput)
contJugador.append(contJugbtn)
contNivel.append(contNivelParrafo)
contCategoria.append(contCatParrafo)
contPregunta.append(contPreParrafo)

contEncabezado.append(contJugador)
contEncabezado.append(contNivel)
contEncabezado.append(contCategoria)
contEncabezado.append(contPregunta)

contenedor.appendChild(contEncabezado)

contJugInput.onsubmit
getElement("pregunta").style.backgroundColor = "#9A7D0A";
getElement("jugador_btn").onclick = function(){    
    if(getElement("jugador_input").value.length == 0 || /^\s+$/.test(getElement("jugador_input").value)){
        alert("Ingrese un nombre de usuario valido")
    }
    else{        
        getElement("jugador_div").style.display = "none";
        getElement("pregunta").style.background = "aquamarine";
        //creamos los botones con sus respectivas configuraciones
        for(var i = 1; i<=4; i++){
            const contBtn = document.createElement("div")
            contBtn.className = "btn";
            contBtn.id = "btn"+i;
            contBtn.textContent = "btn";
            contEncabezado.append(contBtn)
        }

        function llenarBontones(){
            //Primero ponemos las posibles respuestas de forma aleatoria
            contNivelParrafo.textContent = "Nivel: "+(nivel+1);
            var BtnPreguntas = ['1','2','3','4'];
            var i,j,k;
            for (i = BtnPreguntas.length; i; i--) {
                j = Math.floor(Math.random() * i);
                k = BtnPreguntas[i - 1];
                BtnPreguntas[i - 1] = BtnPreguntas[j];
                BtnPreguntas[j] = k;
            }

            //Luego elegimos una pregunta de forma aleatoria
            preguntaAletoria = Math.floor(Math.random()*5);

            //Mostramos
            contCatParrafo.textContent = data[nivel][preguntaAletoria].categoria;
            contPreParrafo.textContent = data[nivel][preguntaAletoria].pregunta;
            getElement("btn"+BtnPreguntas[0]).textContent = data[nivel][preguntaAletoria].respuesta;
            getElement("btn"+BtnPreguntas[1]).textContent = data[nivel][preguntaAletoria].incorrecta1;
            getElement("btn"+BtnPreguntas[2]).textContent = data[nivel][preguntaAletoria].incorrecta2;
            getElement("btn"+BtnPreguntas[3]).textContent = data[nivel][preguntaAletoria].incorrecta3;
        }

        getElement("btn1").onclick = function(){
            if((getElement("btn1").textContent).localeCompare(data[nivel][preguntaAletoria].respuesta)==0){
                console.log("respuesta correcta");
                if(nivel < 4){
                    nivel += 1;
                    console.log(nivel)
                    llenarBontones();
                }
            }else{
                console.log("respuesta incorrecta");
            }
        };
        getElement("btn2").onclick = function(){
            if((getElement("btn2").textContent).localeCompare(data[nivel][preguntaAletoria].respuesta)==0){
                console.log("respuesta correcta");
                if(nivel < 4){
                    nivel += 1;
                    console.log(nivel)
                    llenarBontones();
                }
            }else{
                console.log("respuesta incorrecta");
            }
        };
        getElement("btn3").onclick = function(){
            if((getElement("btn3").textContent).localeCompare(data[nivel][preguntaAletoria].respuesta)==0){
                console.log("respuesta correcta");
                if(nivel < 4){
                    nivel += 1;
                    console.log(nivel)
                    llenarBontones();
                }
            }else{
                console.log("respuesta incorrecta");
            }
        };
        getElement("btn4").onclick = function(){
            if((getElement("btn4").textContent).localeCompare(data[nivel][preguntaAletoria].respuesta)==0){
                console.log("respuesta correcta");
                if(nivel < 4){
                    nivel += 1;
                    console.log(nivel)
                    llenarBontones();
                }
            }else{
                console.log("respuesta incorrecta");
            }
        };



        llenarBontones();
    }
}

function getElement(id){
    return document.getElementById(id);
}