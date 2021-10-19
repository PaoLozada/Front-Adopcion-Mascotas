<template>
    <div class="verMascotas">
        <h2>Bienvenido a nuestra galería</h2>
        <div class="contenedorMascotas">
            
            <div class = "caja_mascota">
                <img src= "https://www.pngitem.com/pimgs/m/266-2666091_cachorros-de-razas-grandes-hd-png-download.png" width="200" height="200">
                <h3> Nombre: Tomas</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://image.shutterstock.com/image-photo/lovely-adopted-mongrel-dog-260nw-453854377.jpg" width="200" height="200">
                <h3> Nombre: Sasy</h3>
                <h3> Edad: 4 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://www.revistapetlovers.com/wp-content/uploads/2020/05/esquilaecanino_articulo-1.jpg" width="200" height="200">
                <h3> Nombre: Lili</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://www.revistapetlovers.com/wp-content/uploads/2020/05/Web_perro-criollo-1.jpg" width="200" height="200">
                <h3> Nombre: Pili</h3>
                <h3> Edad: 3 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://images.vectorhq.com/images/previews/1a7/dog-psd-427320.png" width="200" height="200">
                <h3> Nombre: Tato</h3>
                <h3> Edad: 5 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://petfunusa.com/wp-content/uploads/2020/03/slider-img3.png" width="200" height="200">
                <h3> Nombre: Lucas</h3>
                <h3> Edad: 12 meses</h3>
            </div>
            <div class = "caja_mascota">
                <img src= "https://www.revistapetlovers.com/wp-content/uploads/2020/05/esquilaecanino_articulo-1.jpg" width="200" height="200">
                <h3> Nombre: Pola</h3>
                <h3> Edad: 14 meses</h3>
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
        flex-direction: column;
        
    }
    .contenedorMascotas{
        flex-wrap: wrap;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 20;
      
    }
    .verMascotas h2{
        color: #fff;
        font-size: 40px;
        text-align: center;
        margin: 0%;
    }
    .verMascotas h3{
        color: #fff;
    }
    .caja_mascota{
        margin: 10;
        text-align: center;
        min-width: 120px;

    }
    

    
    
       
    
</style>
