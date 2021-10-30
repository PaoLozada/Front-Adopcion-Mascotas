<template>
  <div class="mascota">
    <div class="container_Mascota">
      <h2>LISTADO MASCOTAS</h2>
      <div class="Tabla">
        <table border="5">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Disponibilidad</th>
              <th colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mascot in mimascota" v-bind:key="mascot">
              <td contenteditable id="id">{{ mascot.Id_Mascota }}</td>
              <td contenteditable id="nombre">{{ mascot.Nombre }}</td>
              <td contenteditable id="edad">{{ mascot.Edad }}</td>
              <td contenteditable id="disponibilidad">
                {{ mascot.Disponibilidad }}
              </td>
              <td>
                <a href="" @click="btnEditar(mascot.Id_Mascota)">EDITAR</a>
              </td>
              <td>
                <a href="" @click="btnBorrar(mascot.Id_Mascota)">ELIMINAR</a>
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
  name: "Mascota",

  data() {
    return {
      mimascota: {
        Id_Mascota: "",
        Nombre: "",
        Edad: "",
        Disponibilidad: "",
      },
    };
  },
 
  methods: {
    
    Traer_Datos: async function () {
       axios
        .get(
          "https://adopcionesmascotas.herokuapp.com/mascotas/",
          this.mimascota,
          { headers: {} }
        )
        .then((response) => {
          this.mimascota = response.data;
          
        });
    },

    btnBorrar: function (id) {
      axios
        .delete(
          `https://adopcionesmascotas.herokuapp.com/mascotas/${id}/`)
        .then((response) => {
          alert("borrando");
        });
       this.$emit("completedMascota");
     },
    btnEditar: function (id) {
      axios
        .put(
          `https://adopcionesmascotas.herokuapp.com/mascotas/${id}/`,this.mimascota, {headers:{}})
          this.mimascota.Nombre= document.getElementById("nombre")
          this.mimascota.Edad = document.getElementById("edad")
          this.mimascota.Disponibilidad = document.getElementById("disponibilidad")
        .then((response) => {
           let datoMascota={
            Nombre : this.mimascota.Nombre,
            Edad : this.mimascota.Edad,
            Disponibilidad : this.mimascota.Disponibilidad
           
           }
            alert ("bien");
           this.$emit("completedMascota", datoMascota);
        })
        
       
    }
    
    
  },
  created: async function () {
      this.Traer_Datos();
     
    }
}
</script>

<style>
.mascota {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mascota h2 {
  color: #000;
}
.container_Mascota {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://capuybigotes.com/wp-content/uploads/2019/11/puppies660x550-1200x800.jpg");

  background-size: cover;
}

.Tabla {
  overflow: scroll;
  height: 400px;
  width: 500px;
}
.Tabla table {
  width: 500px;
  background-color: rgb(247, 245, 250);
}

.mascota tr:hover {
  background-color: rgb(78, 150, 114);
  color: #000;
}
.mascota th {
  background-color: rgb(17, 94, 49);
  color: aliceblue;
  padding: 1%;
  border-bottom: solid 5px;
  position: sticky;
  top: 0;
}
.Tabla a {
  font-size: x-small;
  text-align: center;
}
</style>