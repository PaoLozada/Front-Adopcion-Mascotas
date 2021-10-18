<template>
    <div class="mascotaIn_user">

        <div class="container_MascotaIn_mascota">
            <h2>Registrar Mascota</h2>

            <form v-on:submit.prevent="processMascotaIn" >
                <input type="text" v-model="mascotas.Nombre" placeholder="Nombre">
                <br>
                
                <input type="number" v-model="mascotas.Edad" placeholder="Edad">
                <br>
                
                <input type="boolean" v-model="mascotas.Disponibilidad" placeholder="Disponibilidad">
               

                <button type="submit">Registrar</button>
            </form>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "MascotaIn",

    data: function(){
        return {
            mascotas: {
                Nombre: "",
                Edad: 0,
                Disponibilidad: true
               
                
            }
        }
    },


    methods: {
        processMascotaIn: function(){
            axios.post(
                "https://adopcionesmascotas.herokuapp.com/mascotas/", 
                this.mascotas,  
                {headers: {}}
            )
                .then((result) => {
                    let dataMascotaIn = {
                        Nombre: this.mascotas.Nombre,
                        Edad: this.mascotas.Edad,
                        Disponibilidad: this.mascotas.Disponibilidad
                    }
                    N
                    this.$emit('completedMascotaIn', dataMascotaIn)
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