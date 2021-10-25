<template>
    <div class="candidatoIn_user">
        <div class="container_CandidatoIn_candidato">
            <h2>Diligenciar Encuesta</h2>
                <form v-on:submit.prevent="processCandidatoIn" >
                    <div class = "Encuesta">
                        <div class = "DatosPersonales">
                        
                            <label for="Numero_Identificacion">Número de Identificación</label><input required type="text" v-model="candidatos.Numero_Identificacion">
                            <br>
                            
                            <label for="Nombre_Completo">Nombres y Apellidos</label><input required type="text" v-model="candidatos.Nombre_Completo">
                            <br>
                            
                            <label for="Direccion">Dirección</label><input required type="text" v-model="candidatos.Direccion">
                            <br>
                            
                            <label for="Numero_Contacto">Número de Contacto</label><input required type="text" v-model="candidatos.Numero_Contacto">
                            <br>

                            <label for="Email">E-mail</label><input required type="email" v-model="candidatos.Email">
                            <br>

                            <label for="Edad">Edad</label><input required type="number" v-model="candidatos.Edad" >
                            <br>
                            <span id="Resultado_Prueba"></span>
                     
                        </div>
                        <div class = "Complementarios">
                        
                            <label for="Has_Tenido_Mascotas">Has tenido o tienes mascota</label>
                            
                            <select  v-model="candidatos.Has_Tenido_Mascotas" required onchange="SumarAutomatico(this.value);"><option id="respuestaUno" value=10 >SI</option><option id="respuestaUno" value=5>NO</option ></select>
                            <br>
                            <label for="Seras_Responsable">¿Podrás ser un adoptante responsable?</label>
                            
                            <select v-model="candidatos.Seras_Responsable" required onchange="SumarAutomatico(this.value);"><option  id="respuestaDos" value=20 >SI</option><option id="respuestaDos" value=0>NO</option></select>
                            <br>                            
                            <label for="Tienes_Espacio">¿Tienes un espacio adecuado para tener una mascota?</label>
                            
                            <select v-model="candidatos.Tienes_Espacio" required ><option  id="respuestaTres" value=10>SI</option><option id="respuestaTres" value=5>NO</option></select>
                            <br>                            
                            <label for="Tienes_Tiempo">¿Cuentas con tiempo suficiente?</label>
                            
                            <select v-model="candidatos.Tienes_Tiempo" required><option id="respuestaCuatro" value=20>SI</option><option id="respuestaCuatro" value=0>NO</option></select>
                            <br>
                            <label for="Recursos_Economicos">¿Puedes permitirte económicamente una adopción?</label>
                           
                            <select v-model="candidatos.Recursos_Economicos" required><option  id="respuestaCinco" value=25>SI</option><option id="respuestaCinco" value=0>NO</option></select>
                            <br>
                            <label for="Afrontar_Problemas">¿Estás preparado para los problemas que puedan ocasionar?</label>
                            
                            <select v-model="candidatos.Afrontar_Problemas" required><option id="respuestaSeis" value=15>SI</option><option id="respuestaSeis" value=0>NO</option></select>
                            <br>

                        </div>
                    </div>
                    
                    <button type="submit" id= "enviar">Enviar Informacón</button>
                </form>
          </div>
    </div>
</template>


<script>

import axios from 'axios';
import { onUnmounted } from '@vue/runtime-core';
export default {
    SumarAutomatico: function (valor) {
            var TotalSuma = 0;  
            valor = parseInt(valor); // Convertir a numero entero (número).
            TotalSuma = document.getElementById('Resultado_Prueba').innerHTML;
            // Valida y pone en cero "0".
            TotalSuma = (TotalSuma == null || TotalSuma == undefined || TotalSuma == "") ? 0 : TotalSuma;
            /* Variable genrando la suma. */
            TotalSuma = (parseInt(TotalSuma) + parseInt(valor));
            // Escribir el resultado en una etiqueta "span".
            document.setElementById('Resultado_Prueba').innerHTML = TotalSuma;
        } ,  
    name: "CandidatoIn",   
    data: function(){
        return {
            candidatos: {
                Numero_Identificacion: "",
                Nombre_Completo: "",
                Direccion: "",
                Numero_Contacto: "",
                Email: "",
                Edad: 0,
                Has_Tenido_Mascotas: "", 
                Seras_Responsable: "", 
                Tienes_Espacio: "", 
                Tienes_Tiempo: "",
                Recursos_Economicos: "",
                Afrontar_Problemas: "", 
                Resultado_Prueba: 3,
            }
        }
    },
    

    methods: {
        
        
        processCandidatoIn: function(){
            axios.post(
                "https://adopcionesmascotas.herokuapp.com/candidatos/", 
                this.candidatos,  
                {headers: {}}
            )
            
                .then((result) => {
                    let dataCandidatoIn = {
                        Numero_Identificacion: this.candidatos.Numero_Identificacion,
                        Nombre_Completo: this.candidatos.Nombre_Completo,
                        Direccion: this.candidatos.Direccion,
                        Numero_Contacto:this.candidatos.Numero_Contacto,
                        Email: this.candidatos.Email,
                        Edad: this.candidatos.Edad,
                        Has_Tenido_Mascotas:this.candidatos.Has_Tenido_Mascotas,
                        Seras_Responsable:this.candidatos.Seras_Responsable,
                        Tienes_Espacio:this.candidatos.Tienes_Espacio,
                        Tienes_Tiempo:this.candidatos.Tienes_Tiempo,
                        Recursos_Economicos:this.candidatos.Recursos_Economicos,
                        Afrontar_Problemas:this.candidatos.Afrontar_Problemas,
                        Resultado_Prueba:this.candidatos.Resultado_Prueba,
                    }
                    
                    this.$emit('completedCandidatoIn', dataCandidatoIn)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error en el registro.");
                    
                    
                });
        }
    }
}
</script>

<style>

    .candidatoIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        opacity: 85%;
        display: flex;
        justify-content: left;
        align-items: center;
        background-image: url("https://lyndirees.files.wordpress.com/2018/04/dog-nose-in-fence.jpg");
        background-position: right;
        background-size: contain;
    }

    .container_CandidatoIn_candidato{
        border: 3px solid  #f2f4f7;
        border-radius: 10px;
        width: 70%;
        height: 90%;
        margin: 0;
        padding: 0%;
        display: flex;
        
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #000;
    }
    .DatosPersonales{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 90%;
        margin-right:5%;
        padding: 0%;

    }
    .Complementarios{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 90%;
        margin-left: 5%;
        padding: 0%;
    }
    .Encuesta{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 85%;
        margin: 0;
        padding: 0%;
        

    }

    .candidatoIn_user h2{
        color: #f0f4f8;
        font-size: 30px;
        margin: 5%;
        padding: 0%;

    }

    .candidatoIn_user form{
        width: 90%;
        display: flex;
        flex-direction: column;
        height: 90;
        align-items: center;
        
        margin: 0;
        padding: 0%;
        
    }
    .candidatoIn_user select{
        width: 30%;
        height: 15;
        margin: 0;
        padding: 0%;
      
        
    }

    .candidatoIn_user input{
        height: 25px;
        width: 100%;

        box-sizing: border-box;
        margin: 0;
        padding: 0%;
        

        border: 1px solid #f5f0f1;
    }
    .candidatoIn_user label{
        width: 100%;
        color: #fff;
        margin: 0;
        padding: 0%;
    }

    .candidatoIn_user button{
        width: 20%;
        height: 30px;

        color: #E5E7E9;
        background: #3a423e;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 5px 25px;
        margin: 0;
    }

    .candidatoIn_user button:hover{
        color: #E5E7E9;
        background: rgb(88, 197, 121);
        border: 1px solid #283747;
    }

</style>