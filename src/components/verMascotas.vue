<template>
  <div class="verMascotas">
    
    <br />
    <h2>Bienvenido a nuestra galería</h2>

    <div class="contenedor_slider_M">
      <div class="slider_M" id="slider_M">
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/jzKrR6J/Perrito1.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.pinimg.com/originals/1d/15/4f/1d154fa83507b3a127433cffc9c76eaa.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://www.elcolombiano.com/blogs/dametupata/wp-content/uploads/2012/01/annie.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://pbs.twimg.com/media/EZIIlt6XYAIZ27p.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://www.elcolombiano.com/blogs/dametupata/wp-content/uploads/2012/01/pelusa.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://sumedico.blob.core.windows.net/images/2020/01/22/perroscriollos.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://www.adopta.mx/wp-content/uploads/2013/05/criollo.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2017/06/01/1686179.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://t1.ea.ltmcdn.com/es/images/2/4/4/cuidados_de_perros_cachorros_7442_600_square.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
      </div>
      <div class="slider_btn_M slider_btn--right_M" id="btn-right_M">&#62;</div>
      <div class="slider_btn_M slider_btn--left_M" id="btn-left_M">&#60;</div>
    </div>
  </div>
</template>
<script>

export default {
    
  mounted() {
    const slider = document.querySelector("#slider_M");
    let sliderSection = document.querySelectorAll(".slider_section_M");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    const btnLeft = document.querySelector("#btn-left_M");
    const btnRight = document.querySelector("#btn-right_M");
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    
    function Next_M() {
      let sliderSectionFirst = document.querySelectorAll(".slider_section_M")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    function Prev_M() {
      let sliderSection = document.querySelectorAll(".slider_section_M");
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    btnRight.addEventListener("click", function () {
      Next_M();
    });
    btnLeft.addEventListener("click", function () {
      Prev_M();
    });
    /*setInterval(function () {
        Next_M();
    }, tiempo);*/
  },
};
</script>



<style>
.verMascotas {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.verMascotas h2 {
  color: #000;
  font-size: 30px;
  text-align: center;
  margin: 0%;
  padding: 20;
}

.contenedor_slider_M {
  max-width: 900px;
  width:90%;
  margin: auto;
  overflow: hidden;
  position: relative;
  }
.slider_img_M {
  display: block;
  width: 100%;
  height: 100%;
  object-fit:inherit;
  
}
.slider_M {
  display: flex;
  height: 500px;
  width: 900%;
  margin-left: -100%;
  
}
.slider_section_M{
  width: 100%;
}
.slider_btn_M {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
  font-size: 250%;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
}
.slider_btn_M:hover {
  background: #fff;
}
.slider_btn--left_M {
  left: 10px;
}
.slider_btn--right_M {
  right: 10px;
}
</style>
