<template>
    <div class="candida">
        
        <div class="container_Candida">
           
            <h2>LISTADO CANDIDATOS</h2>
            <div class="TablaC">
         
                    <table border ="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Dirección</th>
                                <th>E-mail</th>
                                <th>Resultado</th>
                                <th colspan="2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="candi in micandidato" v-bind:key="candi">
                                <td>{{candi.Id_Candidato}}</td>
                                <td>{{candi.Nombre_Completo}}</td>
                                <td>{{candi.Numero_Contacto}}</td>
                                <td>{{candi.Direccion}}</td>
                                <td>{{candi.Email}}</td>
                                <td>{{candi.Resultado_Prueba}}</td>
                                <td class="center"><a href="#!"><i class="material-icons">Editar</i></a></td>
                                <td class="center"><a href="#!"><i class="material-icons">Eliminar</i></a></td>
                            </tr>
                        </tbody>
                    </table>
                        
               
            </div>

        </div>

    </div>

</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';


export default {
    name: "listaCandidatos",

    
   data(){
        return{
            micandidato:[],
            
        }
    },
    async mounted(){
        await axios.get("https://adopcionesmascotas.herokuapp.com/candidatos/")
        .then(response=>{
            this.micandidato = response.data;
            
        })
    },
    

    methods: {
        
    }
       
}
</script>

<style>

    .candida{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
    .candida h2{
        color: #fff;
    }
    .container_Candida{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
   
        background-image: url("https://live.hsmob.io/storage/images/wakyma.com/wakyma.com_como-buscar-a-tu-mascota-por-internet.jpg");
        background-size: cover;

    }

    .TablaC {
     overflow:scroll;
     height:400px;
     width:1000px;
    }
    .TablaC table {
        width:1000px;
        background-color:rgb(247, 245, 250);
    }
    
</style>