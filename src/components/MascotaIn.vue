<template>
    <div class="mascotaIn">
        
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
                Id_Mascota:"",
                Nombre: "",
                Edad: 0,
                Disponibilidad: true,
                              
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
                    
                    this.$emit('completedMascotaIn', dataMascotaIn)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error en el registro.");
                    
                    
                });
        }
    },
   
}
</script>

<style>

    .mascotaIn{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        
        background-image: url("https://capuybigotes.com/wp-content/uploads/2019/11/puppies660x550-1200x800.jpg");  
        background-size:cover;
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
        background:#000;
    }
    
    

    .mascotaIn h2{
        color: #fdf7f8;

    }

    .mascotaIn form{
        width: 70%;
        
    }

    .mascotaIn input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #f1eeee;
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
    .mascotaIn label{
        color: #fff;
    }

    .mascotaIn button:hover{
        color: #E5E7E9;
        background: rgb(117, 219, 156);
        border: 1px solid #283747;
    }

</style>