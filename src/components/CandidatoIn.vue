<template>
    <div class="candidatoIn_user">
        <div class="container_CandidatoIn_candidato">
            <h2>Diligenciar Encuesta</h2>

            <form v-on:submit.prevent="processCandidatoIn" >
                <input type="text" v-model="candidatos.Numero_Identificacion" placeholder="Numero_Identificacion">
                <br>
                
                <input type="text" v-model="candidatos.Nombre_Completo" placeholder="Nombre_Completo">
                <br>
                
                <input type="text" v-model="candidatos.Direccion" placeholder="Direccion">
                <br>
                
                <input type="text" v-model="candidatos.Numero_Contacto" placeholder="Numero_Contacto">
                <br>

                <input type="email" v-model="candidatos.Email" placeholder="Email">
                <br>

                <input type="number" v-model="candidatos.Edad" placeholder="Edad">
                
                <button type="submit">Enviar Informacón</button>
            </form>
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
                Edad: 0                
               
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
                        Edad: this.candidatos.Edad  
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