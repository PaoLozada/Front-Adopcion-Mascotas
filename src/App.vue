<template>
  <div id="app" class="app">
    <div class="header">
      <img
        src="https://images.vexels.com/media/users/3/236182/isolated/preview/ad61cf5b323286677b8bd8c48c7c6e94-cabeca-de-cachorro-yorkshire-terrier-desenhada-a-mao.png"
        width="150"
        height="150"
      />
      <h1>Adopta un Cachorro</h1>
      <nav>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Principal</button>
        <button v-if="is_auth" v-on:click="loadSignUp">Registrar Usuario</button>
        <button v-if="is_auth" v-on:click="loadMascotaIn">Administrador de Mascotas</button>
        <button v-if="!is_auth" v-on:click="loadCandidatoIn">Quiero Adoptar</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:completedMascotaIn="completedMascotaIn"
        v-on:completedCandidatoIn="completedCandidatoIn"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <div class="footer">
      <div class="nombres_footer">
        <h2>Grupo2 P51</h2>
        <div class="contacto">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            width="50"
            height="50"
          /><p>3118546547-30185479654</p>
          
        </div>
      </div>
      <div class="footer_img">
        <img
          src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png"
          width="60"
          height="60"
        />
        <img
          src="http://assets.stickpng.com/images/584ac2ef3ac3a570f94a666e.png"
          width="80"
          height="60"
        />
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          width="60"
          height="60"
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
    loadHome: function () {
      this.$router.push({ name: "home" });
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
      this.completedLogIn(data);
    },
    completedMascotaIn: function (data) {
      alert("Mascota registrada con éxito");
    },
    completedCandidatoIn: function (data) {
      alert("Datos enviados con éxito");
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
  
  background-image: url("https://image.shutterstock.com/image-vector/dog-paw-seamless-pattern-vector-260nw-1386908894.jpg");
  color: rgb(51, 7, 102);
  display: flex;
  justify-content: left;
  align-items: center;
}
.header h1 {
  width: 50%;
  text-align: left;
  font-size: 60px;
  background-color: rgb(255, 255, 255);
}

.header nav {
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: left;
  align-items: center;

  font-size: 50px;
}
.header nav button {
  color: #faf8fc;
  background: #531010;
  border: 1px solid #111111;

  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
}

.header nav button:hover {
  color: #22063b;
  background: #e5e7e9;
  border: 1px solid #111111;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;

  background: #531010;
}
.footer {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  color: #360b47;
}
.nombres_footer {
  display: flex;
  width: 50%;
  justify-content: left;
  flex-direction: column;
}
.contacto {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: left;
  padding: 0;
  background-color: fffff;
  margin: 0;
}
.footer h2 {
  display: flex;
  font-size: 30;
  justify-content: left;
  padding: 0;
  background-color: rgb(255, 255, 255);
  margin: 0;
}
.footer_img {
  display: flex;
  width: 50%;
  justify-content: right;
  align-items: center;
  flex-direction: row;
  
}
.footer_img img{
  margin: 20px;
  background-color: rgb(255, 255, 255);
}
.footer p{
  background-color: rgb(255, 255, 255);
}
</style>

















  
  