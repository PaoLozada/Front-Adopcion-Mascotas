<template>
  <div class="logIn_user">
    <div class="contenedor_slider">
      <img 
      src="https://i.ibb.co/9WLbc9B/Mensaje-Inicio1.png"
      width="900"
      />
     
    </div>

    <div class="container_logIn_user">
      <h2>Iniciar sesión</h2>
      <form v-on:submit.prevent="processLogInUser">
        <label for="username">Username</label
        ><input
          id="username"
          name="username"
          type="text"
          v-model="user.username"
          placeholder="Username"
        />
        <br />
        <label for="password">Password</label
        ><input
          id="password"
          name="password"
          type="password"
          v-model="user.password"
          placeholder="password"
        />
        <br />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  </div>
</template>

 
<script>

import axios from "axios";
export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  
  methods: {
    processLogInUser: function () {
      axios
        .post("https://adopcionesmascotas.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style>
.logIn_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("https://contenidosclick.es/wp-content/uploads/2018/04/por-qu-el-marketing-de-contenidos-es-esencial-si-tu-empresa-se-dedica-al-mundo-de-animales-y-veterinaria-1.jpg");
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}
.contenedor_slider {
  max-width: 900px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  height: 100%;
  
}
.contenedor_slider img{
  margin-top: 10%;
}


.container_logIn_user {
  border: 3px solid #dde3e9;
  border-radius: 10px;
  width: 15%;
  height: 40%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logIn_user h2 {
  color: #eef1f5;
}
.logIn_user h3 {
  color: #eef1f5;
  font-size: 35px;
}

.logIn_user form {
  width: 70%;
}

.logIn_user input {
  height: 10px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #e5eaf0;
}
.logIn_user button {
  width: 100%;
  height: 20px;

  color: #faf5f5;
  background: #070707;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 0px 5px;
  margin: 5px 0 25px 0;
}
.logIn_user label {
  color: rgb(241, 238, 238);
}

.logIn_user button:hover {
  color: #e5e7e9;
  background: rgb(125, 168, 26);
  border: 1px solid #283747;
}
</style>
