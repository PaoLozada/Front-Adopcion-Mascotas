<template>
  <div class="mascota">
    <div class="container_Mascota">
      <h2>LISTADO MASCOTAS</h2>
      <div class="Tabla">
        <table border="1">
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
              <td contenteditable id="id">{{mascot.Id_Mascota}}</td>
              <td contenteditable id="nombre">{{mascot.Nombre}}</td>
              <td contenteditable id="edad">{{mascot.Edad}}</td>
              <td contenteditable id="disponibilidad">{{mascot.Disponibilidad}}</td>
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
        Id_Mascota: 0,
        Nombre: "",
        Edad: 0,
        Disponibilidad: true,
      },
    };
  },
  async mounted() {
    await axios
      .get("https://adopcionesmascotas.herokuapp.com/mascotas/")
      .then((response) => {
        this.mimascota = response.data;
      });
  },

  methods: {

    btnBorrar: function (id) {
      axios
        .delete(`https://adopcionesmascotas.herokuapp.com/mascotas/${id}/`)
        .then((response) => {
          this.mimascota = response.data;
        });
    },
    btnEditar: function (id) {
       axios
        .put(`https://adopcionesmascotas.herokuapp.com/mascotas/${id}/`,
                this.mascota,  
                {headers: {}}
            )
                .then((result) => {
                    
                    let dataMascota = {
                        Nombre: this.mascota.Nombre,
                        Edad: this.mascota.Edad,
                        Disponibilidad: this.mascota.Disponibilidad
                    }
                    
                    this.$emit('completedMascota', dataMascota)
                })
                .catch((error) => {
                    console.log(error)
                    alert("Error en el registro.");
                    
                    
                });
    },
  },
};
</script>

<style>
.mascota {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  background-image: url("https://www.mascoteros.com/blog/wp-content/uploads/2017/08/blog_perro-feliz.jpg");
  background-size: cover;
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
</style>