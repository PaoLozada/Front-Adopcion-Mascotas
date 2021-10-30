<template>
  <div class="candida">
    <div class="container_Candida">
      <h2>LISTADO CANDIDATOS</h2>
      <div class="TablaC">
        <table border="1">
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
              <td contenteditable="">{{ candi.Id_Candidato }}</td>
              <td contenteditable="">{{ candi.Nombre_Completo }}</td>
              <td contenteditable="">{{ candi.Numero_Contacto }}</td>
              <td contenteditable="">{{ candi.Direccion }}</td>
              <td contenteditable="">{{ candi.Email }}</td>
              <td>
                <a href="" @click="btnBorrar(candi.Id_Candidato)">ELIMINAR</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListaCandidatos",

  data() {
    return {
      micandidato: {
          
              Nombre_Completo:"",
              Numero_Contacto:"",
              Direccion:"",
              Email:"",
              Resultado_Prueba:0,
      },
    };
  },
  

  methods: {
       Traer_Datos_C: async function () {
       axios
        .get(
          "https://adopcionesmascotas.herokuapp.com/candidatos/",
          this.mimascota,
          { headers: {} }
        )
        .then((response) => {
          this.micandidato = response.data;
        
        });
    },
      btnBorrar: function (id) {
      axios
        .delete(`https://adopcionesmascotas.herokuapp.com/candidatos/${id}/`)
        .then((response) => {
         
        });
        this.$emit("completedListaCandidatos");
        
    },
    /**btnEditar: function (id) {
       axios
        .put(`https://adopcionesmascotas.herokuapp.com/mascotas/${id}/`,
                this.candidato,  
                {headers: {}}
            )
                .then((result) => {
                    
                    let dataCandidato = {
                        Nombre_Completo:this.candidato.Nombre_Completo,
                        Numero_Contacto:this.candidato.Numero_Contacto,
                        Direccion:this.candidato.Direccion,
                        Email:this.candidato.Email,
                        Resultado_Prueba:this.candidato.Resultado_Prueba,
                    }
                    
                    this.$emit('completedCandidato', dataCandidato)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error en el registro.");
                    
                    
                });
    },*/
  },
  created: async function () {
      this.Traer_Datos_C();
     
    }
}
</script>

<style>
.candida {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.candida h2 {
  color: #fff;
}
.container_Candida {
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
  overflow: scroll;
  height: 400px;
  width: 1000px;
}
.TablaC table {
  width: 1000px;
  background-color: rgb(247, 245, 250);
}
.candida tr:hover{
  background-color: rgb(78, 150, 114);
  color: #000;
}
.candida th{
  background-color: rgb(17, 94, 49);
  color: aliceblue;
  padding: 1%;
  border-bottom: solid 5px;
  position: sticky;
  top: 0;
}
.TablaC a{
  font-size:x-small;
  text-align: center;
  
}
</style>