<template>
    <div class="candidatoIn_user">
        <div class="container_CandidatoIn_candidato">
            <h2>Registrarse</h2>

            <form v-on:submit.prevent="processCandidatoIn" >
                <input type="text" v-model="candidatos.Numero_Identificacion" placeholder="Numero_Identificacion">
                <br>
                
                <input type="text" v-model="candidatos.Nombre_Completo" placeholder="Nombre_Completo">
                <br>
                
                <input type="text" v-model="candidatos.Direccion" placeholder="Direccion">
                <br>
                
                <input type="text" v-model="candidatos.Numero_Contacto" placeholder="Numero_Contacto">
                <br>

                <input type="text" v-model="candidatos.Email" placeholder="Email">
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
                Edad: 0,
                
               
            }
        }
    },


    methods: {
        processCandidatoIn: function(){
            axios.post(
                "https://adopcionesmascotas.herokuapp.com/candidatos/", 
                this.user,  
                {headers: {}}
            )
                .then((result) => {
                    let dataCandidatoIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
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

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signUp_user h2{
        color: #283747;

    }

    .signUp_user form{
        width: 70%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
    }

    .signUp_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }

</style>