<template>

    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrar Usuario</h2>

            <form v-on:submit.prevent="processSignUp" >
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                
                <input type="text" v-model="user.name" placeholder="Name">
                <br>

                <input type="email" v-model="user.email" placeholder="Email">
               

                <button type="submit">Registrar</button>
            </form>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                username: "",
                password: "",
                name: "",
                email: ""
               
            }
        }
    },


    methods: {
        processSignUp: function(){
            axios.post(
                "https://adopcionesmascotas.herokuapp.com/user/", 
                this.user,  
                {headers: {}}
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                        password: this.user.password,
                        email: this.user.email,
                        name: this.user.name,
                    }
                    
                    
                });
                this.$emit('completedSignUp');
        },
    }
}
</script>

<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        background-image: url("https://www.gaceta.unam.mx/wp-content/uploads/2019/02/190225-Cult3-des-f1-Roma-perro-borras.jpg");
        display: flex;
        justify-content: center;
        align-items: center;
        background-size:cover;
    }

    .container_signUp_user {
        border: 3px solid  #e8eaec;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signUp_user h2{
        color: #f4f6f8;

    }

    .signUp_user form{
        width: 70%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #f4f8fc;
    }

    .signUp_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #1b8d37;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: rgb(115, 241, 132);
        border: 1px solid #93d356;
    }

</style>