<template>
    <div class="verMascotas">
        <br>
        <br>
        <h2>Bienvenido a nuestra galería</h2>
        <div class="contenedorMascotas">
            
            <div class = "caja_mascota">
                <img src= "https://planetamascotas.files.wordpress.com/2010/06/criollo-blog.jpg" width="150" height="150">
                <h3> Nombre: Tomas</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "	https://i.pinimg.com/originals/1d/15/4f/1d154fa83507b3a127433cffc9c76eaa.jpg" width="150" height="150">
                <h3> Nombre: Sasy</h3>
                <h3> Edad: 4 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://www.elcolombiano.com/blogs/dametupata/wp-content/uploads/2012/01/annie.jpg" width="150" height="150">
                <h3> Nombre: Lili</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://pbs.twimg.com/media/EZIIlt6XYAIZ27p.jpg"  width="150" height="150">
                <h3> Nombre: Pili</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "	https://www.elcolombiano.com/blogs/dametupata/wp-content/uploads/2012/01/pelusa.jpg"  width="150" height="150">
                <h3> Nombre: Tato</h3>
                <h3> Edad: 5 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://sumedico.blob.core.windows.net/images/2020/01/22/perroscriollos.jpg" width="150" height="150">
                <h3> Nombre: Lucas</h3>
                <h3> Edad: 12 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://www.adopta.mx/wp-content/uploads/2013/05/criollo.jpg"  width="150" height="150">
                <h3> Nombre: Pola</h3>
                <h3> Edad: 14 meses</h3>
            </div>
             <div class = "caja_mascota">
                <img src= "	https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2017/06/01/1686179.jpg"  width="150" height="150">
                <h3> Nombre: Rosita</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "		https://t1.ea.ltmcdn.com/es/images/2/4/4/cuidados_de_perros_cachorros_7442_600_square.jpg"  width="150" height="150">
                <h3> Nombre: Lalo</h3>
                <h3> Edad: 7 meses</h3>
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
        
        flex-direction: column;
        text-align: center;
        
    }
    .contenedorMascotas{
        
        flex-wrap: wrap;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        height: 100vh;
      
    }
    .verMascotas h2{
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin: 0%;
        padding: 20;
    }
    .verMascotas h3{
        color: #fff;
        font-size: 20px;
        margin: 0%;
        padding: 0%;
    }
    .caja_mascota{
        
        text-align: center;
        min-width: 120px;

    }
    

    
    
       
    
</style>
