<template>
  <div id="app" class="app">
    <div class="header">
      <img
        src="https://i.ibb.co/fkGNG40/Head3.png"
        
      />
      
      <nav>
        
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Principal</button>
        <button v-if="is_auth" v-on:click="loadSignUp">Registrar Usuario</button>
        <button v-if="is_auth" v-on:click="loadMascotaIn">Ingresar Mascotas</button>
        <button v-if="is_auth" v-on:click="loadMascota">Gestionar Mascotas</button>
        <button v-if="is_auth" v-on:click="loadListaCandidatos">Gestionar Candidatos</button>
        <button v-if="!is_auth" v-on:click="loadverMascotas">Busco un hogar</button>
        <button v-if="!is_auth" v-on:click="loadCandidatoIn">Quiero Adoptar</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:completedMascotaIn="completedMascotaIn"
        v-on:completedMascota="completedMascota"
        v-on:completedCandidatoIn="completedCandidatoIn"
        v-on:completedListaCandidatos="completedListaCandidatos"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <div class="footer">
      <div class="nombres_footer">
        
          <img
            src="https://i.ibb.co/R2gycrP/Whatsapp.png"
            width="200"
            height="100"            
          />
          
       
      </div>
      <div class="footer_img">
        <img
          src="https://i.ibb.co/tKH2CCL/Redes-Sociales.png"
          width="180"
          height="50"
        />
        
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
    };
  },
  components: {},

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    loadMascotaIn: function () {
      this.$router.push({ name: "mascotaIn" });
    },
    loadCandidatoIn: function () {
      this.$router.push({ name: "candidatoIn" });
      
    },
    loadListaCandidatos: function () {
      this.$router.push({ name: "listaCandidatos" });
      
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    loadverMascotas: function () {
      this.$router.push({ name: "vermascotas" });
    },
    loadMascota: function () {
      this.$router.push({ name: "mascota" });
    },

    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
    },
    completedMascotaIn: function (data) {
      alert("Mascota registrada con éxito");
    },
    completedMascota: function (data) {
      alert("Proceso exitoso!");
      
    },
    completedCandidatoIn: function (data) {
      alert("Datos enviados con éxito");
      this.verifyAuth();
    },
    completedListaCandidatos: function (data) {
      alert("Proceso exitoso!");
     
    },
  },

  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  position: relative;
  background-color: #000;
  display: flex;
  justify-content: left;
  align-items: center;
}
.header img{
  z-index: 1;
}
.header h1 {
  width: 60%;
  text-align: left;
  font-size: 65px;
  background-color: rgb(255, 255, 255);
  display: flex;
  font-family: fantasy;
  
}
.header img{
  width: 100%;
  height:100%;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: right;
  align-items:flex-end;

  font-size: 50px;
}
.header nav button {
  color: #faf8fc;
  background: #000;
  border: 1px solid #111111;
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0px;
  
}

.header nav button:hover {
  color: #22063b;
  background: #e5e7e9;
  border: 1px solid #111111;
}

.main-component {
  width: 100%;
  height: 75vh;
  margin: 0%;
  padding: 0%;
  display: flex;
  
  
}
.footer {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  flex-direction: row;
  background-color: #fff;
  color: #360b47;
}
.nombres_footer {
  display: flex;
  width: 50%;
  justify-content: left;
  flex-direction: column;
}

.footer_img {
  display: flex;
  width: 50%;
  justify-content: right;
  align-items: center;
  flex-direction: row;
  
}
.footer_img img{
  display: flex;
  margin: 20px;
  background-color: rgb(255, 255, 255);
}

</style>

















  
  