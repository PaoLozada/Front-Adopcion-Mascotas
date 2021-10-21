<template>
    <div class="candidatoIn_user">
        <div class="container_CandidatoIn_candidato">
            <h2>Diligenciar Encuesta</h2>
                <div class = "Encuesta">
                    <div class = "DatosPersonales">

                        <form v-on:submit.prevent="processCandidatoIn" >
                            <label for="Numero_Identificacion">Número de Identificación</label><input type="text" v-model="candidatos.Numero_Identificacion">
                            <br>
                            
                            <label for="Nombre_Completo">Nombres y Apellidos</label><input type="text" v-model="candidatos.Nombre_Completo">
                            <br>
                            
                            <label for="Direccion">Dirección</label><input type="text" v-model="candidatos.Direccion">
                            <br>
                            
                            <label for="Numero_Contacto">Númmero de Contacto</label><input type="text" v-model="candidatos.Numero_Contacto">
                            <br>

                            <label for="Email">E-mail</label><input type="email" v-model="candidatos.Email">
                            <br>

                            <label for="Edad">Edad</label><input type="number" v-model="candidatos.Edad" >
                            <br>
                            
                        </form>
                </div>
                <div class = "Complementarios">

                        <form v-on:submit.prevent="processCandidatoIn" >
                            <label for="Has_Tenido_Mascotas">Has tenido o tienes mascota</label><select  v-model="candidatos.Has_Tenido_Mascotas" ><option>SI</option><option>NO</option></select>
                            <br>
                            <label for="Seras_Responsable">¿Podrás ser un adoptante responsable?</label><select v-model="candidatos.Seras_Responsable" ><option>SI</option><option>NO</option></select>
                            <br>
                            
                            <label for="Tienes_Espacio">¿Tienes un espacio adecuado para tener una mascota?</label><select v-model="candidatos.Tienes_Espacio" ><option>SI</option><option>NO</option></select>
                            <br>
                            
                            <label for="Tienes_Tiempo">¿Cuentas con tiempo suficiente?</label><select v-model="candidatos.Tienes_Tiempo"><option>SI</option><option>NO</option></select>
                            <br>

                            <label for="Recursos_Economicos">¿Puedes permitirte económicamente una adopción?</label><select v-model="candidatos.Recursos_Economicos" ><option>SI</option><option>NO</option></select>
                            <br>

                            <label for="Afrontar_Problemas">¿Estás preparado para los problemas que puedan ocasionar?</label><select v-model="candidatos.Afrontar_Problemas"><option>SI</option><option>NO</option></select>
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
        width: 80%;
        height: 85%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .DatosPersonales{
        display: flex;
        flex-direction: column;
        margin: 10;
        width: 50%;
        height: 70%;
        padding: 10px;

    }
    .Complementarios{
        display: flex;
        flex-direction: column;
        margin: 10;
        width: 50%;
        height: 70%;
        padding: 10px;

    }
    .Encuesta{
        display: flex;
        flex-direction: row;

    }

    .candidatoIn_user h2{
        color: #f0f4f8;
        font-size: 30px;

    }

    .candidatoIn_user form{
        width: 100%;
        
    }

    .candidatoIn_user input{
        height: 25px;
        width: 80%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #f5f0f1;
    }
    .candidatoIn_user label{
        width: 100%;
        color: #fff;
    }

    .candidatoIn_user button{
        width: 20%;
        height: 30px;

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