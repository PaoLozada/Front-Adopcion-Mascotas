<template>
    <div class="mascotaIn_user">
        
        <div class="container_MascotaIn_mascota">
            <div class="nuevaMascota">
                <h2>Registrar Mascota</h2>

                <form v-on:submit.prevent="processMascotaIn" >
                    <label for="Nombre">Nombre:</label><input type="text" v-model="mascotas.Nombre">
                    <br>
                    
                    <label for="Edad">Edad:</label><input type="number" v-model="mascotas.Edad">
                    <br>
                    
                    <label for="Disponibilidad">Disponibilidad:</label><input type="Boolean" v-model="mascotas.Disponibilidad">
                

                    <button type="submit">Registrar</button>
                </form>
            </div>

            <div class="modificacionesMascota">
                <h2>Actualizar o Eliminar registro</h2>
                <span id ="buscarMascota">
                    <label for = "Id_Mascota">Ingrese el Id correspondiente a la mascota que desea actuallizar o eliminar:</label>
                    <input type="text" v-model="mascotas.Id_Mascota" id="Id_Mascota">
                    <button type="submit">Buscar</button>

                </span>
                <div class="actualizarEliminar">
                    <form v-on:submit.prevent="actualizarMascotaIn" >
                        

                        <label for="Nombre">Nombre:</label><input type="text" v-model="mascotas.Nombre">
                        <br>
                        
                        <label for="Edad">Edad:</label><input type="number" v-model="mascotas.Edad">
                        <br>
                        
                        <label for="Disponibilidad">Disponibilidad:</label><input type="Boolean" v-model="mascotas.Disponibilidad">
                        <div class="botones">
                            <button type="submit">Actualizar</button>
                            <button type="submit">Borrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';

export default {
    name: "MascotaIn",

    data: function(){
        return {
            mascotas: {
                Id_Mascota:"",
                Nombre: "",
                Edad: 0,
                Disponibilidad: true
                
            }
        }
    },


    methods: {

        /*getData: async function () {
            let mascotaId = document.getElementById('Id_Mascota')
            axios.get(`https://mision-tic-bank-be.herokuapp.com/mascota/${mascotaId}/`)
                .then((result) => {
                    this.Nombre = result.data.Nombre;
                    this.Edad = result.data.Edad;	
                    this.Disponibilidad = result.data.Disponibilidad;
                    console.log("Bien hecho")
                    })
                .catch(() => {
                    this.$emit('logOut');
                });


        },*/
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
                    
                    this.$emit('completedMascotaIn', dataMascotaIn)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error en el registro.");
                    
                    
                });
        }
    },
    /*created: async function(){
        this.getData();
    },*/
}
</script>

<style>

    .mascotaIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        background-image: url("https://cdn.wallpapersafari.com/21/52/u8MYB1.png");
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container_MascotaIn_mascota{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;


    }
    .modificacionesMascota span{
        width: 40%;
        
    }
    .modificacionesMascota{
        margin-left:10%;
        margin-right:5%;
        display: flex;
        flex-direction: column;
        
    }
    .botones{
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nuevaMascota {
        border: 3px solid  #ebe1e1;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        margin-right:10%;
        margin-left:5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .actualizarEliminar {
        border: 3px solid  #ebe1e1;
        border-radius: 10px;
        width: 75%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    

    .mascotaIn_user h2{
        color: #fdf7f8;

    }

    .mascotaIn_user form{
        width: 70%;
        
    }

    .mascotaIn_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #f1eeee;
    }
    .modificacionesMascota button{
        width: 50%;
        height: 40px;

        color: #E5E7E9;
        background: #188037;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 20px 25px 20px;
    }
    .actualizarEliminar button{
        width: 50%;
        height: 40px;

        color: #E5E7E9;
        background: #188037;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 20px 25px 20px;
    }

    .nuevaMascota button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #188037;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }
    .mascotaIn_user label{
        color: #fff;
    }

    .mascotaIn_user button:hover{
        color: #E5E7E9;
        background: rgb(117, 219, 156);
        border: 1px solid #283747;
    }

</style>