<template>
    <div class="verMascotas">
        <div class="contenedorMascotas">
            <h2>Bienvenido a nuestra galería</h2>
            <div class = "caja_mascota">
                <img src= "https://www.pngitem.com/pimgs/m/266-2666091_cachorros-de-razas-grandes-hd-png-download.png">
                <h3> Nombre: Tomas</h3>
                <h3> Edad: 3 meses</h3>
            </div>
        </div>
    </div>
</template>




<style>

    .verMascotas{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        
        
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
        font-size: 28px;
        padding-right: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:honeydew;
        text-align: center;
    }

    
       
    .logIn_user h2{
        color: #eef1f5;

    }
    .logIn_user h3{
        color: #eef1f5;
        font-size: 35px;

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
