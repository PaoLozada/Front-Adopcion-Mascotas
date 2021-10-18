<template>

    <div class="logIn_user">
       <div class=imagen_LogIn_user>
        <img src="https://www.affinity-petcare.com/advance/sites/default/files/img/roulette/mini_puppy.png" width="500" height="500">
       </div>
       <div class ="parrafo">
            <p>En la mayoría de los casos, 
                adoptar significa darle una segunda oportunidad
                 a un animal que ha sufrido un proceso de abandono, y en ocasiones maltrato.
                  Acogerlo en tu casa de por vida y darle la estabilidad, los cuidados y el 
                  cariño que necesita va a ayudarlo a que recupere su confianza y su autoestima.</p>

        </div>
       
        <div class="container_logIn_user">
            <h2>Iniciar sesión</h2>
            <form v-on:submit.prevent="processLogInUser" >
                <label for="username">Username</label><input id="username" name="username" type="text" v-model="user.username" placeholder="Username">
                <br>                
                <label for="password">Password</label><input id="password" name="password" type="password" v-model="user.password" placeholder="password">
                <br>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
        

    </div>

</template>


<script>
import axios from 'axios';
export default {
    name: "LogIn",

    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },
methods: {
        processLogInUser: function(){
            axios.post(
                "https://adopcionesmascotas.herokuapp.com/login/", 
                this.user,  
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
          
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                    
                });
        }
    }
}
</script>

<style>

    .logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        
    }

    .container_logIn_user {
        border: 3px solid  #dde3e9;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .parrafo {
        
        width: 80%;
        height: 50%;
        font-size: 40px;
        padding-right: 20%;
        display: flex;
        
        justify-content: right;
        align-items: center;
        color:honeydew;
    }

    
       
    .logIn_user h2{
        color: #eef1f5;

    }

    .logIn_user form{
        width: 70%;
        
    }

    .logIn_user input{
        height: 10px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #e5eaf0;
    }
    .logIn_user button{
        width: 100%;
        height: 20px;

        color: #01070e;
        background: #17995c;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 0px 5px;
        margin: 5px 0 25px 0;
    }
    .logIn_user label{
        color: rgb(241, 238, 238);
    }

    .logIn_user button:hover{
        color: #E5E7E9;
        background: rgb(125, 168, 26);
        border: 1px solid #283747;
    }

</style>
