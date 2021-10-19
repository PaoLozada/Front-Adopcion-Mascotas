<template>
    <div class="greetings">
        <h1>Bienvenid@ de nuevo <span> {{username}} </span>!</h1>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data: function(){
            return {
                username: localStorage.getItem('username') || "none"
            }
        }
    }
</script>

<style>
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .greetings h1{
        font-size: 50px;
        color: #f0f3f7;
    }
    .greetings span{
        color: rgb(20, 220, 37);
        font-weight: bold;
    }
</style>
