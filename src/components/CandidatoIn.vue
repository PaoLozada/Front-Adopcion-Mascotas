<template>
    <div class="candidatoIn_user">
        <div class="container_CandidatoIn_candidato">
            <h2>Diligenciar Encuesta</h2>
                <div class = "Encuesta">
                    <div class = "DatosPersonales">

                        <form v-on:submit.prevent="processCandidatoIn" >
                            <label for="Número de Identificación">Username</label><input type="text" v-model="candidatos.Numero_Identificacion" >
                            <br>
                            
                            <label for="Nombres y Apellidos">Username</label><input type="text" v-model="candidatos.Nombre_Completo" >
                            <br>
                            
                            <label for="Dirección">Username</label><input type="text" v-model="candidatos.Direccion" >
                            <br>
                            
                            <label for="Númmero de Contacto">Username</label><input type="text" v-model="candidatos.Numero_Contacto" >
                            <br>

                            <label for="Email">Username</label><input type="email" v-model="candidatos.Email">
                            <br>

                            <label for="Edad">Username</label><input type="number" v-model="candidatos.Edad" >
               
                            
                        </form>
                </div>
                <div class = "Complementarios">

                        <form v-on:submit.prevent="processCandidatoIn" >
                            <label for="Has tenido o tienes mascota">Username</label><input type="text" v-model="candidatos.Has_Tenido_Mascotas" >
                            <br>
                            
                            <label for="¿Podrás ser un adoptante responsable?">Username</label><input type="text" v-model="candidatos.Seras_Responsable" >
                            <br>
                            
                            <label for="¿Tienes un espacio adecuado para tener una mascota?">Username</label><input type="text" v-model="candidatos.Tienes_Espacio" >
                            <br>
                            
                            <label for="¿Cuentas con tiempo suficiente ">Username</label><input type="text" v-model="candidatos.Tienes_Tiempo">
                            <br>

                            <label for="¿Puedes permitirte económicamente una adopción?">Username</label><input type="email" v-model="candidatos.Recursos_Economicos" >
                            <br>

                            <label for="Estás preparado para los problemas que puedan ocasionar?">Username</label><input type="number" v-model="candidatos.Afrontar_Problemas">
                            <br>

                            
                        </form>
                </div>


            </div>
            <button type="submit">Enviar Informacón</button>

        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
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
                Has_Tenido_Mascotas:"", 
                Seras_Responsable:"", 
                Tienes_Espacio:"", 
                Tienes_Tiempo:"",
                Recursos_Economicos:"",
                Afrontar_Problemas:""                
               
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
                        Afrontar_Problemas:this.candidatos.Afrontar_Problemas   
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
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_CandidatoIn_candidato{
        border: 3px solid  #f2f4f7;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .DatosPersonales{
        display: flex;
        flex-direction: column;
        margin: 10;

    }
    .Complementarios{
        display: flex;
        flex-direction: column;
        margin: 10;

    }
    .Encuesta{
        display: flex;
        flex-direction: row;

    }

    .candidatoIn_user h2{
        color: #f0f4f8;

    }

    .candidatoIn_user form{
        width: 70%;
        
    }

    .candidatoIn_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #f5f0f1;
    }

    .candidatoIn_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #11743a;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .candidatoIn_user button:hover{
        color: #E5E7E9;
        background: rgb(88, 197, 121);
        border: 1px solid #283747;
    }

</style>