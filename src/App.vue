<template>
  <div id="app" class="app">
    <div class="header">
        <img src="https://images.vexels.com/media/users/3/236182/isolated/preview/ad61cf5b323286677b8bd8c48c7c6e94-cabeca-de-cachorro-yorkshire-terrier-desenhada-a-mao.png" width="150" height="150" >
        <h1>Adopta un Cachorro</h1>
        <nav>
              
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Principal </button>
        <button v-if="is_auth" v-on:click="loadSignUp" > Registrar Usuario </button>
        <button v-if="is_auth" v-on:click="loadMascotaIn" > Administrador de Mascotas </button>
        <button v-if="!is_auth" v-on:click="loadCandidatoIn" > Quiero Adoptar </button>
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
      <div class nombres_footer>
        <h2>Grupo2 P51</h2>
        <h3>Alexandra Veloza</h3>
        <h3>Luis Almanza</h3>
        <h3>Jaime </h3>
        <h3>Yujak Velez</h3>
        <h3>Paola Andrea Lozada G.</h3>
      </div>
      <div class= footer_img>
        <img src="http://cdn.ilovefreesoftware.com/wp-content/uploads/2016/10/feat-3.png" width="20" height="20">
      </div>
    </div>
  </div>
</template>




<script>
  export default {
    name: 'App',
    data: function(){
      return{
        is_auth: false
      }
    }, 
    components: {
    },

    methods: {
      verifyAuth: function() {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false)
          this.$router.push({ name: "logIn" });
        else
          this.$router.push({ name: "home" });
      },
      logOut: function () {
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      },
      
      loadLogIn: function(){
        this.$router.push({name: "logIn"})
      },

      loadSignUp: function(){
        this.$router.push({name: "signUp"})
      },
      loadMascotaIn: function(){
        this.$router.push({name: "mascotaIn"})
      },
      loadCandidatoIn: function(){
        this.$router.push({name: "candidatoIn"})
      },
      loadHome: function() {
        this.$router.push({ name: "home" });
      },

      completedLogIn: function(data) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
      },
      completedSignUp: function(data) {
        alert("Registro Exitoso");
        this.completedLogIn(data);
      },
      completedMascotaIn: function(data) {
        alert("Mascota registrada con éxito");
      },
      completedCandidatoIn: function(data) {
        alert("Datos enviados con éxito");
      }
    },



    created : function(){
          this.verifyAuth()
    } 
  } 
</script>

<style>
  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0; 
    width: 100%; 
    height: 10vh; 
    min-height: 100px; 
    background-color: rgb(250, 249, 249); 
    background-image: "https://e7.pngegg.com/pngimages/924/444/png-clipart-black-animal-footprints-black-animal.png";
    color: rgb(51, 7, 102); 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
  } 
  .header h1{
    width: 20%; 
    text-align: right; 
    font-size: xx-large;
  }

  .header nav {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 50px;
  }
  .header nav button{
    color: #faf8fc;
    background: #531010;
    border: 1px solid #111111;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #22063b;
    background: #E5E7E9;
    border: 1px solid #111111;
  }

  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background:#531010;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px; 
    flex-direction: row;
    background-color: #f3eded;
    color: #360b47;

  }
  .nombres_footer{
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
  }

  .footer h2{
    width: 50%;
    height: 20%;
    font-size: 20;
    
  }
  .footer h3{
    width: 50%;
    height: 10%;
    font-size: 10;
    display: flex;
    justify-content: left;
    align-items: left;
  }

</style>

















  
  